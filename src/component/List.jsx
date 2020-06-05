import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./List.module.css";

function List(props) {

    const [val, setVal] = React.useState("");

    function onValChange(event) {
        setVal(event.target.value);
    }

    function addItemToOriginal() {
        props.addToOriginal(val);
        console.log(val);
        setVal("");
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>{props.title}</h2>
            <div className={styles.container}>
                {props.items.map((item, idx) => (
                    <ListItem key={idx} content={item} type={props.addItem} addItem={props.addItem} removeItem={props.removeItem} />
                ))}
                {props.addItem != null ? <div className={styles.input}>
                    <input type="text" className={styles.box} value={val} onChange={onValChange} placeholder={"Enter new item"} />
                    <button onClick={addItemToOriginal}>Add Here</button>
                </div> : null}
            </div>
        </div>
    );
}

export default List;
