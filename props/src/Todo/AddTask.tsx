import React, { useState } from "react";
import "./AddTask.css";

export const AddTask = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos((prev) => [...prev, task]);
    setTask("");
  };

  const deleteTask = (indexToDelete: number) => {
    console.log(indexToDelete);
    const filteredData = todos.filter((_, index) => index !== indexToDelete);
    console.log(filteredData);
    setTodos(filteredData);
  };

  return (
    <div className="todo-container">
      <h2>📝 Todo App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter your task..."
          onChange={handleChange}
          maxLength={30}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="todo-list">
        {todos.map((data, index) => (
          <li key={index}>
            <span>{data}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
