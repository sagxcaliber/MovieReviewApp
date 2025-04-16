from dataclasses import dataclass
from typing import List


@dataclass
class SentimentAnalysisInput:
    review: str


@dataclass
class AnalysisResponse:
    review: str
    result: str
    score: float


@dataclass
class AnalysisResponseV2:
    input: str
    prediction: str
    confidence: str


@dataclass
class AnalysisResponses:
    response: List[AnalysisResponse] = None
