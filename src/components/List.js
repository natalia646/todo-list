import React from "react";
import Delete from "../components/assets/delete.svg";
import Rename from "../components/assets/undo-svgrepo-com.svg";
import Done from "../components/assets/done.svg";

export default function List({ todos, setTodos }) {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          {todo.title}
         <div>
              <img className="icons" src={Done}></img>
              <img className="icons" src={Rename}></img>
              <img className="icons" src={Delete}></img>
         </div>
        </li>
      ))}
    </div>
  );
}
