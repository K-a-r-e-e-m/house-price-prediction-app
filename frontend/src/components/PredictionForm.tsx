import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { PredictionRequest } from "../types/prediction";
import { predictPrice } from "../api/predictionClient";
import locations from "../assets/locations.json";
import "./PredictionForm.css";

export default function PredictionForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState<PredictionRequest>({
    location: "",
    total_area: 0,
    status: "",
    transaction: "",
    furnishing: "",
    facing: "",
    overlooking: "",
    society: "",
    bathroom: 1,
    balcony: 0,
    car_parking: "",
    ownership: "",
    floor_num: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setError("");

  if (!form.location) {
    setError("Please select a location.");
    return;
  }

  if (form.total_area <= 0) {
    setError("Area must be greater than zero.");
    return;
  }

  if (!form.status) {
    setError("Please select property status.");
    return;
  }

  if (!form.transaction) {
    setError("Please select transaction type.");
    return;
  }

  if (!form.furnishing) {
    setError("Please select furnishing.");
    return;
  }
    
  try {
    setLoading(true);

    const result = await predictPrice(form);

    // console.log(result);

    navigate("/result", {
    state: result,
    });

    } catch {
        setError("Failed to get prediction.");
    } finally {
        setLoading(false);
    }
    }

    return (
    <form onSubmit={handleSubmit}>
    {/* Location */}
    <div>
        <label htmlFor="location">
        Location <span className="required">*</span>
        </label>

        <select
        id="location"
        value={form.location}
        onChange={(e) =>
            setForm({
            ...form,
            location: e.target.value,
            })
        }
        >
        <option value="">Select Location</option>

        {locations.map((location) => (
            <option key={location} value={location}>
            {location}
            </option>
        ))}
        </select>
    </div>

    {/* Total Area */}
    <div>
        <label htmlFor="total_area">
        Total Area <span className="required">*</span>
        </label>

        <input
        id="total_area"
        type="number"
        min={0}
        value={form.total_area}
        onChange={(e) =>
            setForm({
            ...form,
            total_area: Number(e.target.value),
            })
        }
        />
    </div>

    {/* Bathrooms */}
    <div>
        <label htmlFor="bathroom">Bathrooms</label>

        <input
        id="bathroom"
        type="number"
        min={0}
        value={form.bathroom}
        onChange={(e) =>
            setForm({
            ...form,
            bathroom: Number(e.target.value),
            })
        }
        />
    </div>

    {/* Balconies */}
    <div>
        <label htmlFor="balcony">Balconies</label>

        <input
        id="balcony"
        type="number"
        min={0}
        value={form.balcony}
        onChange={(e) =>
            setForm({
            ...form,
            balcony: Number(e.target.value),
            })
        }
        />
    </div>

    {/* Floor Number */}
    <div>
        <label htmlFor="floor_num">Floor Number</label>

        <input
        id="floor_num"
        type="number"
        min={0}
        value={form.floor_num}
        onChange={(e) =>
            setForm({
            ...form,
            floor_num: Number(e.target.value),
            })
        }
        />
    </div>

    {/* Status */}
    <div>
        <label htmlFor="status">
        Status <span className="required">*</span>
        </label>

        <select
        id="status"
        value={form.status}
        onChange={(e) =>
            setForm({
            ...form,
            status: e.target.value,
            })
        }
        >
        <option value="">Select Status</option>
        <option value="Ready to Move">Ready to Move</option>
        <option value="Under Construction">Under Construction</option>
        </select>
    </div>

    {/* Transaction */}
    <div>
        <label htmlFor="transaction">
        Transaction <span className="required">*</span>
        </label>

        <select
        id="transaction"
        value={form.transaction}
        onChange={(e) =>
            setForm({
            ...form,
            transaction: e.target.value,
            })
        }
        >
        <option value="">Select Transaction</option>
        <option value="Resale">Resale</option>
        <option value="New Property">New Property</option>
        </select>
    </div>

    {/* Furnishing */}
    <div>
        <label htmlFor="furnishing">
        Furnishing <span className="required">*</span>
        </label>

        <select
        id="furnishing"
        value={form.furnishing}
        onChange={(e) =>
            setForm({
            ...form,
            furnishing: e.target.value,
            })
        }
        >
        <option value="">Select Furnishing</option>
        <option value="Unfurnished">Unfurnished</option>
        <option value="Semi-Furnished">Semi-Furnished</option>
        <option value="Furnished">Furnished</option>
        </select>
    </div>

    {/* Facing */}
    <div>
        <label htmlFor="facing">Facing</label>

        <select
        id="facing"
        value={form.facing}
        onChange={(e) =>
            setForm({
            ...form,
            facing: e.target.value,
            })
        }
        >
        <option value="">Select Facing</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
        </select>
    </div>

    {/* Overlooking */}
    <div>
        <label htmlFor="overlooking">Overlooking</label>

        <select
        id="overlooking"
        value={form.overlooking}
        onChange={(e) =>
            setForm({
            ...form,
            overlooking: e.target.value,
            })
        }
        >
        <option value="">Select Overlooking</option>
        <option value="Main Road">Main Road</option>
        <option value="Garden">Garden</option>
        <option value="Pool">Pool</option>
        </select>
    </div>

    {/* Society */}
    <div>
        <label htmlFor="society">Society</label>

        <input
        id="society"
        type="text"
        placeholder="e.g. Palm Hills"
        value={form.society}
        onChange={(e) =>
            setForm({
            ...form,
            society: e.target.value,
            })
        }
        />
    </div>

    {/* Car Parking */}
    <div>
        <label htmlFor="car_parking">Car Parking</label>

        <select
        id="car_parking"
        value={form.car_parking}
        onChange={(e) =>
            setForm({
            ...form,
            car_parking: e.target.value,
            })
        }
        >
        <option value="">Select Parking</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        </select>
    </div>

    {/* Ownership */}
    <div>
        <label htmlFor="ownership">Ownership</label>

        <select
        id="ownership"
        value={form.ownership}
        onChange={(e) =>
            setForm({
            ...form,
            ownership: e.target.value,
            })
        }
        >
        <option value="">Select Ownership</option>
        <option value="Freehold">Freehold</option>
        <option value="Leasehold">Leasehold</option>
        </select>
    </div>

    {error && (
    <p className="error-message">
        {error}
    </p>
    )}

    <button type="submit" disabled={loading}>
    {loading ? "Predicting..." : "Predict Price"}
    </button>
    
    </form>
    );
}