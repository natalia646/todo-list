import React from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Form({input, setInput, todos, setTodos}) {
const onInputChange = (event) =>{
  setInput(event.target.value)
}
  return (
    <div>
      <form>
        <input
          className="input-field"
          type="text"
          placeholder="Enter to do"
          value={input}
          onChange={onInputChange}
        ></input>
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}
