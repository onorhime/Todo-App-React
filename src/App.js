import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import NewTask from './Components/New Tasks/NewTask'
import ListGoal from './Components/List Tasks/listgoal'

function App() {
  const addNewTask = (task) => {
   updateTask(prevTasks=> [...prevTasks, task])
  }
  const [tasks, updateTask ] =  useState([
    {id: 'task1', text: 'this is task 1'},
    {id: 'task2', text: 'this is task 2'},
    {id: 'task3', text: 'this is task 3'},
  ])
  return (
    <div className="container">
        <h1>To-Do List</h1>
        <NewTask onNewTask={addNewTask} />
        <ListGoal tasks={tasks} />
        
    </div>
  );
}

export default App;
