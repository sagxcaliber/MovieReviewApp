import os
import cohere
from fastapi.encoders import jsonable_encoder
import json

from config import api_key, prompt, max_token, model, temperature, model_v2
from sentiment_engine.helper.sentiment_helper import SentimentAnalysisInput, AnalysisResponses, AnalysisResponse
from type import ReviewInput

class SentimentService:
    def __init__(self):
        self.co = cohere.Client(api_key)
        self.data = []

    def check_sentiment(self, review: SentimentAnalysisInput):
        response = self.co.generate(
            model=model
            , prompt=prompt.format(review=review.review)
            , max_tokens=max_token
            , temperature=temperature
        )
        return response.generations[0].text.strip()

    # using this v2 version with classify fine-tuning model
    def check_sentiment_v2(self, review: SentimentAnalysisInput):
        response = self.co.classify(
            model=model_v2,
            inputs=[review.review]
        )
        return response.classifications[0]

    def fetch_sentiment(self, review: ReviewInput):

        classification = self.check_sentiment_v2(
            review=SentimentAnalysisInput(review=review.review)
        )

        final_response = AnalysisResponses(response=[
            AnalysisResponse(
                review=classification.input
                , result=classification.prediction
                , score=classification.confidence
            )
        ])
        res = jsonable_encoder(final_response.response)
        self.dump_reviews(data=res)
        return res

    @staticmethod
    def list_reviews():
        history = []
        try:
            with open('history.json', 'r') as f:
                history = json.load(f)
        except FileNotFoundError:
            history = []
        finally:
            return history[::-1] if history else []

    def dump_reviews(self, data):
        history = self.list_reviews()
        history.extend(data)
        with open('history.json', 'w') as f:
            json.dump(history, f)
