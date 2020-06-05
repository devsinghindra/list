import React from "react";
import styles from "./ListItem.module.css";

function ListItem(props) {
    return (
        <div className={styles.item}>
            <h3 className={styles.content}>{props.content}</h3>
            {props.type != null ? <button onClick={() => { props.addItem(props.content) }}>Add</button> :
                <button onClick={() => { props.removeItem(props.content) }}>Delete</button>}
        </div>
    );
}

export default ListItem;
