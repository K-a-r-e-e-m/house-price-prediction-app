from pandas import DataFrame
import numpy as np


def predict_price(
    data: DataFrame,
    preprocessor,
    model,
) -> float:
    """
    Run preprocessing then predict.
    """
    # print("=" * 50)
    # print(data)
    # print("=" * 50)
    # print(data.dtypes)
    # print("=" * 50)
    # print(data)
    # print(data.dtypes)
    
    processed = preprocessor.transform(data)

    prediction = model.predict(processed)

    final_price = np.expm1(prediction)

    return float(final_price[0])