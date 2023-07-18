import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
