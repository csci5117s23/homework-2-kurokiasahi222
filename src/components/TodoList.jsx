import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import styles from "../styles/Home.module.css";
import { doneToDo } from "@/modules/data";
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

// To Do
// set it up as a to-do widget.

function ToDoList(props) {
    const { isLoaded, userId, getToken } = useAuth();
    
    const [items, setItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);

    async function done(content) {
        const token = await getToken({ template: 'codehooks' });
        try {
            await doneToDo(token, content);
        } catch (err) {
            console.error(err);
        }
    }

    function addItem(inputText) {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
    }
    
    function addDoneItem(id) {
        setDoneItems(prevItems => {
            return [...prevItems, items[id]];
        });
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
