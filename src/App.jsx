import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(data.todos);

  useEffect(() => {
    // TODO: Initialize state with data from JSON file
  }, []);

  const toggleTaskCompletion = (taskId) => {
    // TODO: Implement task toggling functionality
    // This should update the completed status of the task with the given ID
  };

  return (
    <div className="app">
      <h1>Nested To-Do List</h1>
      <div className="todo-list">
        {todos.map((Categories, catIndex) => (
          <div key={Categories.category} className="category">
            <h2>{Categories.category}</h2>
            {Categories.projects.map((Project, projIndex) => (
              <div key={Project.projects} className="projects">
                <h3>{Project.name}</h3>
                {Project.tasks.map((task) => (
                  <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
                    <input type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={()=> toggleTaskCompletion(catIndex, projIndex, task.id)}/>
                    <label htmlFor={`task-${task.id}`}>{task.description}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        {/* Categories → Projects → Tasks */}
      </div>
    </div>
  );
}

export default App;
