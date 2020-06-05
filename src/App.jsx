import React, { useState } from "react";
import List from "./component/List";
import styles from "./App.module.css";

function App() {
    const [items1, setItems1] = useState([
        "Admin",
        "Supervisor",
        "User",
        "Spanish Speaking",
    ]);

    const [items2, setItems2] = useState([
        "Supervisor",
        "Spanish Speaking",
    ]);

    function addToOriginal(val) {
        setItems1([...items1, val]);
    }
    function addHandler(itemName) {
        setItems2([...items2, itemName]);
    }

    function removeHandler(item) {
        const index = items2.indexOf(item);
        console.log(index);
        items2.splice(index, 1);
        console.log(items2);
        setItems2([...items2]);
    }

    return (
        <div className={styles.container}>
            <List items={items1} addItem={addHandler} addToOriginal={addToOriginal} title={"All roles or skill sets"} />
            <List items={items2} removeItem={removeHandler} title={"Available Roles"} />
        </div>
    );
}

export default App;
