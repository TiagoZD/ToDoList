import React, { useState } from "react";
import "./App.css";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addNewTask = () => {
    if (task.trim() !== "") {
      setList(oldArray => [...oldArray, task]);
      setTask("");
    }
  };

  const handleRemoveItem = todoIndex => {
    const newTodos = list.filter((_, index) => index !== todoIndex);
    setList(newTodos);
  };

  return (
    <div className="App">
      <h1>Esta es tu lista: </h1>
      <div>
        Agregar un elemento a la lista
        <input
          placeholder="Elemento"
          type="text"
          required="required"
          rows="1"
          value={task}
          onChange={event => {
            setTask(event.target.value);
          }}
        />
        <button class="myButton" onClick={addNewTask}>
          Agregar
        </button>
      </div>
      <div>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <button
              class="x"
              onClick={() => {
                handleRemoveItem(index);
              }}
            >
              x
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
