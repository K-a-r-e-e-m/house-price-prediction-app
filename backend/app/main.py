from contextlib import asynccontextmanager
import joblib

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes.prediction import router
from app.core.config import settings
from app.utils.logging_config import setup_logging

logger = setup_logging()

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("Loading ML models...")

    app.state.preprocessor = joblib.load(settings.PREPROCESSOR_PATH)
    app.state.model = joblib.load(settings.MODEL_PATH)

    logger.info("Models loaded successfully!")

    yield

    logger.info("Shutting down...")
    
app = FastAPI(
    title="House Price Prediction API",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "message": "House Price Prediction API is running"
    }