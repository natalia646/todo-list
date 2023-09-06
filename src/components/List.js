import React from "react";
import Delete from "../components/assets/delete.svg";
import Change from "../components/assets/change.svg";
import Done from "../components/assets/done.svg";

export default function List({ todos, setTodos, setEditTodo }) {
  const handeleDelet = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? "todo-list complete" : "todo-list"}
        >
          {todo.title}

          <div>
            <img
              className="icons"
              alt="done"
              src={Done}
              onClick={() => handleComplete(todo)}
            ></img>
            <img
              alt="rename"
              className="icons"
              src={Change}
              onClick={() => handleEdit(todo)}
            ></img>
            <img
              alt="delete"
              className="icons"
              src={Delete}
              onClick={() => handeleDelet(todo)}
            ></img>
          </div>
        </li>
      ))}
    </div>
  );
}
