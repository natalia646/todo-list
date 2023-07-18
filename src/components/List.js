import React from "react";
import Delete from "../components/assets/delete.svg";
import Rename from "../components/assets/undo-svgrepo-com.svg";
import Done from "../components/assets/done.svg";

export default function List({ todos, setTodos, setEditTodo }) {
  const handeleDelet = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id == todo.id) {
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
        <li key={todo.id} className={todo.completed ? 'todo-list complete' : 'todo-list'}>{todo.title}

          <div>
            <img
              className="icons"
              src={Done}
              onClick={() => handleComplete(todo)}
            ></img>
            <img
              className="icons"
              src={Rename}
              onClick={() => handleEdit(todo)}
            ></img>
            <img
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
