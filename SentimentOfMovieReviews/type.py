from pydantic import BaseModel


class ReviewInput(BaseModel):
    review: str
