import { useState } from "react";

import Header from "./components/Header";
import Cards from "./components/Cards";
import "./App.css";

function App() {
    const [addProductArr, setAddProductArr] = useState([]);

    return (
        <div className="App">
            <Header />
            <Cards
                addProductArr={addProductArr}
                setAddProductArr={setAddProductArr}
            />
        </div>
    );
}

export default App;
