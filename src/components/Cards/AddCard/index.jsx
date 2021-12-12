import "./AddCard.css";

export default function AddCard() {
    return (
        <div className="card-container">
            <h3 className="card-title">Add New Products</h3>
            <form className="card-input-area">
                <input className="add-input" type="text" placeholder="Name" />
                <input
                    className="add-input"
                    type="text"
                    placeholder="Product Code"
                />
                <input className="add-input" type="text" placeholder="Price" />
                <div className="add-submit-button">
                    <input
                        className="submit-button"
                        type="button"
                        onChange={(e) => e.preventDefault()}
                        value="Add Product"
                    />
                    <input
                        className="submit-button"
                        type="submit"
                        onChange={(e) => e.preventDefault()}
                        value="Save All"
                    />
                </div>
            </form>
        </div>
    );
}
