import "./AddCard.css";

export default function AddCard() {
    return (
        <div className="card-container">
            <h3 className="card-title">Add New Product</h3>
            <form className="card-input-area">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Product Code" />
                <input type="text" placeholder="Price" />
                <input
                    className="submit-button"
                    type="submit"
                    onChange={(e) => e.preventDefault()}
                    value="Add"
                />
            </form>
        </div>
    );
}
