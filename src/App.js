import './App.css'
import React, { useState} from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import TaskComplete from "./TaskComplete";

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput === "") {
      alert("Поле для ввода не может быть пустым");
    } else {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      )
    ]);
  };


  return (
    <div className="App">
      <header>
        <h1>ToDoList</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}

      <div className="task-stats">
          <div className="tasks-count">
              Задачи <span>{todos.length}</span>
          </div>
          <TaskComplete taskComplete={todos.filter((todo) => todo.complete).length} />
      </div>
    </div>
  );
}

export default App;
