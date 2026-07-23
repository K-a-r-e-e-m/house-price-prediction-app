import pandas as pd

from app.schemas.prediction import PredictionRequest


def preprocess(request: PredictionRequest) -> pd.DataFrame:
    """
    Convert PredictionRequest
    into a pandas DataFrame.
    """

    data = {
        "location": request.location,
        "Status": request.status,
        "Transaction": request.transaction,
        "Furnishing": request.furnishing,
        "facing": request.facing,
        "overlooking": request.overlooking,
        "Society": request.society,
        "Bathroom": request.bathroom,
        "Balcony": request.balcony,
        "Car Parking": request.car_parking,
        "Ownership": request.ownership,
        "Total Area": request.total_area,
        "Floor_Num": request.floor_num,
    }

    return pd.DataFrame([data])