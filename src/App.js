import React, { useState } from "react";
import {
  AddToDo,
  Completed,
  Container,
  EditToDo,
  NotCompleted,
  ToDo,
} from "./components";
import "./App.css";
import { ToDoContext } from "./context/todoContext";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    let id = e.dataTransfer.getData("id");

    todo.filter((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTodo([...todo]);
  }
  const Task = { completed: [], notCompleted: [] };
  if (todo) {
    todo.forEach((item, index) => {
      if (item.completed) {
        Task.completed.push(
          <ToDo title={item.title} id={item.id} index={index} />
        );
      } else {
        Task.notCompleted.push(<ToDo title={item.title} id={item.id} />);
      }
    });
  }

  return (
    <ToDoContext.Provider value={{ todo, setTodo, showEdit, setShowEdit }}>
      <div className="app">
        <h1>TODO App</h1>
        <AddToDo />
        {showEdit && <EditToDo />}
        <Container>
          <NotCompleted
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => {
              handleDrop(e);
            }}
          >
            {Task.notCompleted.map((item) => {
              return item;
            })}
          </NotCompleted>
          <Completed
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => {
              handleDrop(e);
            }}
          >
            {Task.completed.map((item) => {
              return item;
            })}
          </Completed>
        </Container>
      </div>
    </ToDoContext.Provider>
  );
}
