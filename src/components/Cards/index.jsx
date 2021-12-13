import AddCard from "./AddCard";
import DeleteCard from "./DeleteCard";
import GetAllCard from "./GetAllCard";

import "./Cards.css";

export default function Card() {
    return (
        <main className="cards-container">
            <AddCard />
            <DeleteCard />
            <GetAllCard />
        </main>
    );
}
