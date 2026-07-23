import { useLocation, Link } from "react-router-dom";

import type { PredictionResponse } from "../types/prediction";

export default function ResultPage() {
  const location = useLocation();

  const result = location.state as PredictionResponse | undefined;

  if (!result) {
    return (
        <div>
        <h2>No prediction found.</h2>
        <Link to="/">Go Back</Link>
        </div>
  );
  }

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    }).format(result.predicted_price);

  if (!result) {
    return (
      <div>
        <h2>No prediction found.</h2>

        <Link to="/">Go Back</Link>
      </div>
    );
  }

return (
  <main className="result-page">
    <h1>Prediction Result</h1>

    <div className="price">
      ₹ {formattedPrice}
    </div>

    <Link className="back-btn" to="/">
      Predict Another House
    </Link>
  </main>
);
}