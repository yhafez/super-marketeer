import { useState } from "react";
import "./AddCard.css";

export default function AddCard() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [productsToAddArr, setProductsToAddArr] = useState([]);
    const [productsToAddCompArr, setProductsToAddCompArr] = useState([]);

    const handleAddProduct = (e) => {
        // Prevent page from refreshing on button click
        e.preventDefault();

        // Return early if field is missing
        if (name === "") return alert("A name is required");
        if (price === "") return alert("A price is required");

        // Add new products to memory array
        setProductsToAddArr([...productsToAddArr, { name, price }]);

        // Add new product to components array
        setProductsToAddCompArr([
            ...productsToAddCompArr,
            <div className="add-result-container" key="1">
                <p className="new-product">
                    {name.toLowerCase()} - ${price}
                </p>
                <button className="submit-button">Save</button>
            </div>,
        ]);

        // Reset input fields
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

                <input
                    className="submit-button"
                    type="submit"
                    onClick={(e) => handleAddProduct(e)}
                    value="Add Product"
                />

                <div className="products-to-add-container">
                    <h4 className="add-results-title">Products to add: </h4>
                    {productsToAddCompArr.length > 0
                        ? productsToAddCompArr
                        : null}
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
