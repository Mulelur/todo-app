import React, { useContext, useState } from "react";
import { ToDoContext } from "../../context/todoContext";
import "./styles/addTodo.css";

export default function AddToDo() {
  const { todo, setTodo } = useContext(ToDoContext);
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (todo) {
      setTodo([
        ...todo,
        { id: `${Date.now()}`, title: value, completed: false },
      ]);
    } else {
      setTodo([{ id: `${Date.now()}`, title: value, completed: false }]);
    }
    setValue("");
  }

  return (
    <div className="addTodo">
      <form
        className="addTodo__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="Add task..."
          className="addTodo__input"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button className="addTodo__btn">ADD</button>
      </form>
    </div>
  );
}
