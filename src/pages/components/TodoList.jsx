import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import styles from "../../styles/Home.module.css";

// To Do
// set it up as a to-do widget.

function ToDoList(props) {

    const [items, setItems] = useState([]);

    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }
    function addDoneItem(id) {
        setItems(prevItems => {
            return prevItems.filter((items, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <div> 
                <Form onadd={addItem} />
            </div>
            <div>
                <ul className={styles.ul_list}>
                    {items.map((todoItem, index) => (
                        <TodoItem
                        key = {index}
                        id = {index}
                        text = {todoItem}
                        onChecked = {addDoneItem}
                        />
                    ))}
                </ul>
  
            </div>
        </div>
    )
}

export default ToDoList;
