import { useState } from "react";
import "./AddCard.css";

export default function AddCard({ addProductArr, setAddProductArr }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleAddProduct = (e) => {
        e.preventDefault();
        const addProdArrClone = [...addProductArr];
        addProdArrClone.push({ name, price });
        setAddProductArr(addProdArrClone);
        setName("");
        setPrice("");
    };

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
                        onClick={(e) => handleAddProduct(e)}
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
