from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

from typing import List, Union 

from review_crawling import get_reviews


app = FastAPI()

class Review(BaseModel):
    reviewer: str
    content: str
    date: str
    hash_tags: List[str] = []

class Reviews(BaseModel):
    reviews: List[Review] = []


@app.get("/reviews/{sido}/{place_name}", response_model = Reviews)
async def item_detail(sido: str, place_name: str):

    results = Reviews()
    review_list = get_reviews(sido, place_name)

    for review in review_list:
        results.reviews.append(review)
    
    results = results.dict()

    print(results)

    return results