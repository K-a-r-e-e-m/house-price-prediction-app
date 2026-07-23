import type {
  PredictionRequest,
  PredictionResponse,
} from "../types/prediction";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function predictPrice(
  data: PredictionRequest
): Promise<PredictionResponse> {
  const response = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to get prediction");
  }

  const result: PredictionResponse = await response.json();
  
  return result;
}