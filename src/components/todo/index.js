import React, { useContext } from "react";
import { ToDoContext } from "../../context/todoContext";
import { Delete, Edit } from "../../icons";
import "./styles/todo.css";

export default function ToDo({ title, id }) {
  const { todo, setTodo, setShowEdit, showEdit } = useContext(ToDoContext);
  function handleDragStart(e, id) {
    e.dataTransfer.setData("id", id);
  }
  function handleDelete(id) {
    const newTodo = [];
    todo.forEach((item) => {
      if (item.id !== id) {
        newTodo.push(item);
      }
    });
    setTodo([...newTodo]);
  }
  function handleShowEdit() {
    setShowEdit({ show: !showEdit, id: id, value: title });
  }
  return (
    <div className="todo" onDragStart={(e) => handleDragStart(e, id)} draggable>
      <div className="todo__title">{title}</div>
      <div className="todo__actions">
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="todo__action-delet"
        >
          <Delete />
        </button>
        <button
          onClick={() => {
            handleShowEdit();
          }}
          className="todo__action-edit"
        >
          <Edit />
        </button>
      </div>
    </div>
  );
}
