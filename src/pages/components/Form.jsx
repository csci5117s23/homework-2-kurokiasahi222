import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import {
    addToDo
} from "../../modules/data";

function Form(props) {
    const { isLoaded, userId, getToken } = useAuth();
    const [input, setInput] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInput(newValue);
    }

    async function add(content) {
        console.log("Content is: " + content)
        const token = await getToken({ template: 'codehooks' });
        console.log(token); 
        const data = {
            user_Id: userId,
            item: content, 
        }
        console.log(data)
        const newTodo = await addToDo(token, data); 
        
    }

    return (
        <div className="form">
            <form> 
                <input onChange={handleChange} type="text" placeholder="Add task" value={input} required/>
                <button 
                    onClick={function (event) {
                        event.preventDefault();
                        {input === "" ? 
                        console.log("Input is empty")
                        :
                        props.onadd(input)
                        setInput("")
                        add(input)
                        console.log("Adding input: " + input)
                        }
                    }}
                    type="submit" 
                >
                Submit
                </button>
            </form>
        </div>
    );
}

export default Form;