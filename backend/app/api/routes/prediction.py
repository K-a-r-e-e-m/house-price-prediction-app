from fastapi import APIRouter, Request

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.preprocessing import preprocess
from app.services.inference import predict_price

router = APIRouter()


@router.get("/health")
def health():
    return {"status": "ok"}


@router.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest, http_request: Request):

    data = preprocess(request)

    prediction = predict_price(
        data=data,
        preprocessor=http_request.app.state.preprocessor,
        model=http_request.app.state.model,
    )

    return PredictionResponse(
        predicted_price=prediction
    )