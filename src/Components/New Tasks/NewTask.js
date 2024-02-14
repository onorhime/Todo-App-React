import React, {useState} from "react";
import "./NewTask.css";

const NewTask = (props) => {
    const [text, setText] = useState('')
    const textChangedHandler = event => {
        setText(event.target.value)
    }
    const addTaskHandler = event => {
        event.preventDefault()
        const newTask = {id: Math.random().toString(), text: text}

        props.onNewTask(newTask)

        setText('')
    }
    return <form className="add-form" onSubmit={addTaskHandler}>
                <input type="text" value={text} onChange={textChangedHandler} className="task-input" placeholder="Add a task" />
                <button type="submit" className="add-btn">Add</button>
           </form>

}

export default NewTask;