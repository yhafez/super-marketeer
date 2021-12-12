import "./DeleteCard.css";

export default function DeleteCard() {
    return (
        <div className="card-container">
            <h3 className="card-title">Delete a Product</h3>
            <form className="card-input-area">
                <input
                    className="submit-button"
                    type="buton"
                    onChange={(e) => e.preventDefault()}
                    value="Delete"
                />
            </form>
        </div>
    );
}
