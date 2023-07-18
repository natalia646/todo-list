import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ input, setInput, todos, setTodos }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
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
