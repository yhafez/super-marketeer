import AddCard from "./AddCard";
import DeleteCard from "./DeleteCard";
import GetAllCard from "./GetAllCard";

import "./Cards.css";

export default function Card({ addProductArr, setAddProductArr }) {
    return (
        <main className="cards-container">
            <AddCard
                addProductArr={addProductArr}
                setAddProductArr={setAddProductArr}
            />
            <DeleteCard />
            <GetAllCard />
        </main>
    );
}
