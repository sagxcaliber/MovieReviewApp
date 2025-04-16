from fastapi import FastAPI
from fastapi import status
import time
import uvicorn
from fastapi.middleware.cors import CORSMiddleware


from type import ReviewInput
from utils import Result
from custom_enum import NO_DATA
from sentiment_engine.service import SentimentService

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post('/checkSentiment')
async def check_sentiment_review(
        params:ReviewInput
    ):
    res = Result()
    start_time = time.time()

    try:
        response = SentimentService().fetch_sentiment(review=params)

        end_time = (time.time() - start_time)

        if response:
            res.set(
                status_code=status.HTTP_200_OK
                , r_obj=response
                , fetch_time=end_time
            )

        else:
            res.set()

    except Exception as err:
        res.set(message=str(err)
                , fetch_time=(time.time() - start_time)
                )
    finally:
        return res.get()


@app.get('/listReviews')
async def check_sentiment_review(
    ):
    res = Result()
    start_time = time.time()

    try:
        response = SentimentService().list_reviews()

        end_time = (time.time() - start_time)

        if response:
            res.set(
                status_code=status.HTTP_200_OK
                , r_obj=response
                , fetch_time=end_time
            )

        else:
            res.set(status_code=status.HTTP_200_OK,message=NO_DATA)

    except Exception as err:
        res.set(message=str(err)
                , fetch_time=(time.time() - start_time)
                )
    finally:
        return res.get()


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
