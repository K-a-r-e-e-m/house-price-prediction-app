# Notebooks

Notebook workspace for training and exporting the house price prediction model.

## Purpose

This folder contains the machine learning workflow used to build the model, including data preparation, feature engineering, training, evaluation, and model export.

## Contents

- house_price_model.ipynb: main notebook for model development
- data/: sample dataset and location metadata used during training

## Dataset Source

The training dataset is **not included** in this repository because it exceeds GitHub's file size limit.

Download it from Kaggle:

- https://www.kaggle.com/datasets/juhibhojani/house-price

After downloading, place it in:

```text
notebooks/data/house_prices.csv

## Run

```bash
cd notebooks
jupyter notebook
```

Open the notebook in your browser to explore the model training pipeline.

## Notebook structure

```
notebooks
├── README.md
├── data
│   ├── house_prices.csv
│   └── locations.json
└── house_price_model.ipynb
```

The notebook folder contains the training notebook and the source dataset files used for model development.

### Folder descriptions

- `house_price_model.ipynb` — notebook for data exploration, model training, evaluation, and export.
- `data/house_prices.csv` — the raw house price dataset used for training.
- `data/locations.json` — location metadata used by the notebook and frontend.
