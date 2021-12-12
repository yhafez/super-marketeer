import { useState } from "react";
import "./DeleteCard.css";

export default function DeleteCard() {
    const [productCode, setProductCode] = useState("");

    return (
        <div className="card-container">
            <h3 className="card-title">Delete a Product</h3>
            <form className="card-input-area">
                <input
                    className="input"
                    type="text"
                    placeholder="Product Code"
                    value={productCode}
                    maxLength="20"
                    onChange={(e) => setProductCode(e.target.value)}
                />
                <input
                    className="submit-button"
                    type="button"
                    value="Delete"
                    onChange={(e) => e.preventDefault()}
                />
            </form>
        </div>
    );
}
