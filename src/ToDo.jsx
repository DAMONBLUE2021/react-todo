/*import React, {useState} from 'react';

function ToDo(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the Dog"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);

    };

    function addTask(){

        if(newTask.trim()!== ""){

        setTasks(t=>[...tasks, newTask]);
        setNewTasks("");

    }};

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=>i!==index);
        setTasks(updatedTasks);


    };

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    };

    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
    };


    return(
        <>  
            <div className='to-do-list'>
                <h1>To-Do-List</h1>

                <div >
                    <input
                        type="text"
                        placeholder='Enter Your Task'
                        value={newTask}
                        onChange={handleInputChange}
                    
                    />

                    <button  className='add-button' onClick={addTask}>Add 


                    </button>

                </div>

                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                        className='delete-button'
                        onClick={()=>deleteTask(index)}>Delete</button>
                        
                        <button
                        className='move-button'
                        onClick={()=>moveTaskUp(index)}>👆</button>
                        
                        <button
                        className='move-button'
                        onClick={()=>moveTaskDown(index)}>👇</button>
                    </li>)}
                </ol>

            </div>
        </>
    );
};

export default ToDo;
*/


/*
body{
    background-color: hsl(0, 0%, 10%);
}

.to-do-list{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    margin-top: 100px;
}

h1{
    font-size: 4em;
}
button{
    font-size: 1.7rem;
    font-weight: bold;
    padding: 10px 20px;
    color: aliceblue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5 ease;
}

.add-button{
    background-color: hsl(120, 94%, 37%);
}

.add-button:hover{
    background-color:hsl(120, 96%, 50%);
}

.delete-button{
    background-color: hsl(0, 94%, 37%);
}

.delete-button:hover{
    background-color:hsl(0, 96%, 50%);
}

.move-button{
    background-color: hsl(242, 94%, 37%);
}

.move-button:hover{
    background-color:hsl(244, 96%, 50%);
}

input[type="text"]{
    font-size: 1.6rem;
    padding: 10px;
    border: 2px solid hsl(0, 0%, 35%);
    border-radius: 5px;
    color: black;
}

ol{
    padding: 0;
}

li{
    font-size: 2rem;
    font-weight: bold;
    padding: 15px;
    background-color: hsl(0, 0%, 97%);
    margin-bottom: 10px;
    border: 3px solid hsla(0, 0%, 85%, 0.75);
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.text{
    flex:1;
}

.delete-button, .move-button{
    padding: 8px 12px;
    font-size: 1.4rem;
    margin-left: 10px;
}

*/

import React, { useState, useEffect } from 'react';
import './index.css';

function ToDo() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : ["Eat Breakfast", "Take a shower", "Walk the Dog"];
  });

  const [newTask, setNewTask] = useState('');

  // 🔁 sync with localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={newTask}
          onChange={handleInputChange}
        />

        <button
          className="add-button"
          onClick={addTask}
          disabled={!newTask.trim()}
        >
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
