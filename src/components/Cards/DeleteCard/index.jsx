import { useState } from "react";
import "./DeleteCard.css";

export default function DeleteCard() {
    const [productCode, setProductCode] = useState("");

    const handleInput = (value) => {
        const alphaNumericCheck = /^\s*([0-9a-zA-Z-]*)\s*$/;
        if (!value.match(alphaNumericCheck))
            return alert("no special characters allowed");

        const length = value.length;

        // Remove dash up to 3 times
        if (value.includes("-")) {
            value = value.replace("-", "");
            value = value.replace("-", "");
            value = value.replace("-", "");
        }

        if (length <= 4) setProductCode(value);
        else if (length > 3 && length < 10) {
            value = value.slice(0, 4) + "-" + value.slice(4);
        } else if (length > 9 && length < 15) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 8) +
                "-" +
                value.slice(8);
        } else if (length > 14 && length < 20) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 8) +
                "-" +
                value.slice(8, 12) +
                "-" +
                value.slice(12);
        }
        setProductCode(value);
    };

    return (
        <div className="card-container">
            <h3 className="card-title">Delete a Product</h3>
            <form className="card-input-area">
                <input
                    className="input"
                    type="text"
                    placeholder="Product Code"
                    value={productCode}
                    maxLength="19"
                    onChange={(e) => handleInput(e.target.value)}
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
