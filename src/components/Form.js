import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditDodo,
}) {
  
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setInput("");

  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    }else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  };
  return (
    <div>
      <form onSubmit={onFormSubmit} className="form">
        <input
          className="input-field"
          type="text"
          placeholder="Enter to do"
          value={input}
          onChange={onInputChange}
        ></input>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}
