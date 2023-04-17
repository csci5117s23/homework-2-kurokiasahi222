import { useState } from "react";
import Form from "./Form";

// To Do
// set it up as a to-do widget.

function ToDoItem(props) {
    return (
        <div
            onClick={() => {
                props.onChecked(props.id);
            }}
        >
            <li><input type="checkbox"/>{props.text}</li>
        </div>
    ); 
}

export default ToDoItem; 
