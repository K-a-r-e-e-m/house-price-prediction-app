from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    API_TITLE: str = "House Price Prediction API"

    PREPROCESSOR_PATH: str = "models/preprocessor.pkl"
    MODEL_PATH: str = "models/xgb_house_model.pkl"

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()