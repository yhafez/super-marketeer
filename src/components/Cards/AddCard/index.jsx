import { useState } from "react";
import "./AddCard.css";

export default function AddCard() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div className="card-container">
            <h3 className="card-title">Add New Products</h3>
            <form className="card-input-area">
                <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="input"
                    type="number"
                    min="0.00"
                    max="9999.99"
                    step="0.01"
                    placeholder="Price in USD"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <div className="add-submit-button">
                    <input
                        className="submit-button"
                        type="button"
                        onChange={(e) => e.preventDefault()}
                        value="Add Product"
                    />
                    <input
                        className="submit-button"
                        type="button"
                        onChange={(e) => e.preventDefault()}
                        value="Save All"
                    />
                </div>
            </form>
        </div>
    );
}
