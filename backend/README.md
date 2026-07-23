# Backend

FastAPI backend for the house price prediction application.

## What it does

The backend validates incoming requests, preprocesses user inputs, loads the trained model, and returns a predicted house price.

## Tech Stack

- FastAPI
- Uvicorn
- Pydantic
- Python
- joblib
- scikit-learn

## Install

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## Run

```bash
uvicorn app.main:app --reload
```

Open `http://127.0.0.1:8000/docs` to view the Swagger UI.

## API Endpoints

- `GET /health` — API health check
- `POST /predict` — returns a predicted house price
- `GET /docs` — OpenAPI documentation

## Swagger Preview

![Swagger API Docs](../docs/screenshots/swagger-docs.png)

## Backend structure

```
backend
├── .dockerignore
├── .env.example
├── Dockerfile
├── README.md
├── app
│   ├── api
│   │   └── routes
│   ├── core
│   │   └── config.py
│   ├── main.py
│   ├── schemas
│   │   └── prediction.py
│   ├── services
│   │   ├── inference.py
│   │   └── preprocessing.py
│   └── utils
│       └── logging_config.py
├── models
│   ├── preprocessor.pkl
│   └── xgb_house_model.pkl
├── requirements.txt
└── tests
    └── test_prediction.py
```

This structure separates API routing, request validation, preprocessing, model inference, and tests for a clean backend module.

### Folder descriptions

- `.dockerignore` / `Dockerfile` — Docker container configuration for the backend.
- `.env.example` — example environment variables for local and deployed runs.
- `app/main.py` — FastAPI application startup and lifecycle.
- `app/api/routes/` — API route definitions for `/health` and `/predict`.
- `app/schemas/` — Pydantic models for request and response validation.
- `app/services/` — preprocessing and model inference logic.
- `app/core/config.py` — environment and model path settings.
- `app/utils/` — logging, utilities, and infrastructure code.
- `models/` — serialized model and transformer artifacts loaded at runtime.
- `tests/` — backend test coverage and validation.
