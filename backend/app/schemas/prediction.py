from pydantic import BaseModel
from typing import Optional

from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):
    location: str

    total_area: float = Field(gt=0)

    status: str
    transaction: str
    furnishing: str

    facing: Optional[str] = None
    overlooking: Optional[str] = None
    society: Optional[str] = None

    bathroom: int = Field(ge=0)
    balcony: int = Field(ge=0)

    car_parking: Optional[str] = None
    ownership: Optional[str] = None

    floor_num: float

class PredictionResponse(BaseModel):
    predicted_price: float