import "./DeleteCard.css";

export default function DeleteCard() {
    return (
        <div className="card-container">
            <h3 className="card-title">Delete a Product</h3>
            <form className="card-input-area">
                <textarea
                    className="response-area"
                    rows="10"
                    columns="30"
                    placeholder="Response"
                    readonly="true"
                ></textarea>
                <input
                    className="submit-button"
                    type="submit"
                    onChange={(e) => e.preventDefault()}
                    value="Delete"
                />
            </form>
        </div>
    );
}
