import { useState } from "react";

function App() {
  const [openSection, setOpenSection] = useState({
    taskForm: true,
    taskList: true,
    completedTaskList: true,
  });
  const [tasks, setTasks] = useState([]);
  const [sortType, setSortType] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const priorities = {
    low: 1,
    medium: 2,
    high: 3,
  };
  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);
  function toggleSection(section) {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }
  function handleAddTask(task) {
    setTasks((prev) => [
      ...prev,
      { ...task, completed: false, id: crypto.randomUUID() },
    ]);
  }
  function handleCompleteTask(id) {
    setTasks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: true } : item))
    );
  }
  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }
  function sortTasks(type) {
    if (type === sortType) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortOrder("asc");
      setSortType(type);
    }

    if (type === "priority") {
      if (sortOrder === "asc") {
        setTasks((prev) =>
          [...prev].sort(
            (a, b) => priorities[a.priority] - priorities[b.priority]
          )
        );
      } else {
        setTasks((prev) =>
          [...prev].sort(
            (a, b) => priorities[b.priority] - priorities[a.priority]
          )
        );
      }
    } else {
      if (sortOrder === "asc") {
        setTasks((prev) =>
          [...prev].sort(
            (a, b) => Date.parse(a.deadline) - Date.parse(b.deadline)
          )
        );
      } else {
        setTasks((prev) =>
          [...prev].sort(
            (a, b) => Date.parse(b.deadline) - Date.parse(a.deadline)
          )
        );
      }
    }
  }
  return (
    <div className="app">
      <div className="task-container">
        <h1>Task list with priority levels</h1>
        {openSection.taskForm && <TaskForm onSubmit={handleAddTask} />}
        <button
          className={`close-button ${openSection.taskForm ? "open" : ""}`}
          onClick={() => toggleSection("taskForm")}
        >
          +
        </button>
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <div className="sort-controls">
          <button
            className={`sort-button ${sortType === "date" ? "active" : ""}`}
            onClick={() => sortTasks("date")}
          >
            By date{" "}
            {sortType === "date" && (sortOrder === "asc" ? "\u2191" : "\u2193")}
          </button>
          <button
            className={`sort-button ${sortType === "priority" ? "active" : ""}`}
            onClick={() => sortTasks("priority")}
          >
            By priority{" "}
            {sortType === "priority" &&
              (sortOrder === "asc" ? "\u2191" : "\u2193")}
          </button>
        </div>
        {openSection.taskList && (
          <TaskList
            tasks={activeTasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
        <button
          className={`close-button ${openSection.taskList ? "open" : ""}`}
          onClick={() => toggleSection("taskList")}
        >
          +
        </button>
      </div>
      <div className="completed-task-container">
        <h2>Completed tasks</h2>
        {openSection.completedTaskList && (
          <CompletedTaskList
            tasks={completedTasks}
            onDeleteTask={handleDeleteTask}
          />
        )}
        <button
          className={`close-button ${
            openSection.completedTaskList ? "open" : ""
          }`}
          onClick={() => toggleSection("completedTaskList")}
        >
          +
        </button>
      </div>
      <Footer />
    </div>
  );
}

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [deadline, setDeadline] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || !deadline) return;
    onSubmit({
      title,
      priority,
      deadline,
    });
    setTitle("");
    setPriority("low");
    setDeadline("");
  }
  return (
    <form action="" className="task-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Task title"
        required
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <select
        value={priority}
        onChange={(evt) => setPriority(evt.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        required
        onChange={(evt) => setDeadline(evt.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function TaskList({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((item) => (
        <TaskItem
          task={item}
          key={item.id}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

function CompletedTaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="completed-task-list">
      {tasks.map((item) => (
        <TaskItem task={item} key={item.id} onDeleteTask={onDeleteTask} />
      ))}
    </ul>
  );
}

function TaskItem({ task, onCompleteTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.priority}`}>
      <div className="task-info">
        <div>
          {task.title} <strong>{task.priority}</strong>
        </div>
        <div className="task-deadline">
          Due: {new Date(task.deadline).toLocaleDateString()}
        </div>
      </div>
      <div className="task-buttons">
        {!task.completed && (
          <button
            className="complete-button"
            onClick={() => onCompleteTask(task.id)}
          >
            Complete
          </button>
        )}
        <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>Technologies used:</strong> React, JSX, props, useState, etc.
      </p>
    </footer>
  );
}

export default App;
