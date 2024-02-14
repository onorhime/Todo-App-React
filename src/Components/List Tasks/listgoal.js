import React from "react";

import  './listgoal.css';

const ListGoal = (props) => {
    return (
        <ul className="task-list">
           {props.tasks.map((task) => {
                return  <li key={task.id} className="task-item"><p className="task-name">{task.text}</p> <button className="delete-btn">X</button></li>
           })}
        </ul>
    )
}

export default ListGoal