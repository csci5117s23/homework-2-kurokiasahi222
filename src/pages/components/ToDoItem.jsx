function TodoItem(props) {
    return (
        <div>
            <li>
                <input type="checkbox" onClick= {
                    function() {
                        {props.onChecked(props.id)}
                    }
                }/>
                {props.text}
            </li>
        </div>
    ); 
}

export default TodoItem; 
