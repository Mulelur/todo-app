import React, { useContext, useState } from "react";
import { ToDoContext } from "../../context/todoContext";
import "./styles/editTodo.css";

export default function EditToDo() {
  const { todo, setTodo, showEdit, setShowEdit } = useContext(ToDoContext);
  const [value, setValue] = useState(showEdit.value);
  function handleSubmit(e) {
    e.preventDefault();

    todo.filter((item) => {
      if (item.id === showEdit.id) {
        item.title = value;
      }
      return item;
    });
    setTodo([...todo]);
    setValue("");
    setShowEdit(false);
  }

  return (
    <div className="editTodo">
      <form
        className="editTodo__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="Edit todo..."
          className="editTodo__input"
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button className="editTodo__btn">Edit</button>
      </form>
    </div>
  );
}
