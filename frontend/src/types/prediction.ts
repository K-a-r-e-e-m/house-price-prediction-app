export interface PredictionRequest {
  location: string;
  total_area: number;

  status: string;
  transaction: string;
  furnishing: string;

  facing?: string;
  overlooking?: string;
  society?: string;

  bathroom: number;
  balcony: number;

  car_parking?: string;
  ownership?: string;

  floor_num: number;
}

export interface PredictionResponse {
  predicted_price: number;
}