import "./GetAllCard.css";

export default function GetAllCard() {
    return (
        <div className="card-container">
            <h3 className="card-title">Get a List of All Products</h3>
            <form className="card-input-area">
                <input
                    className="submit-button"
                    type="submit"
                    onChange={(e) => e.preventDefault()}
                    value="Get"
                />
            </form>
        </div>
    );
}
