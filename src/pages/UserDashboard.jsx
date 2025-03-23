import React, { useState } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("assigned");
  const [showLogout, setShowLogout] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete UI Design",
      status: "assigned",
      assignedDate: "12-03-2025",
      deadline: "20-03-2025",
    },
    {
      id: 2,
      title: "Fix Backend API",
      status: "assigned",
      assignedDate: "13-03-2025",
      deadline: "22-03-2025",
    },
    {
      id: 3,
      title: "Write Documentation",
      status: "pending",
      deadline: "18-03-2025",
    },
    {
      id: 4,
      title: "Testing & Debugging",
      status: "completed",
      deadline: "16-03-2025",
    },
  ]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const markAsCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "completed" } : task
      )
    );
  };

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const logout = () => {
    alert("Logged out successfully!");
    setShowLogout(false);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Task Manager</h2>
        <ul>
          <li
            className={selectedCategory === "assigned" ? "active" : ""}
            onClick={() => handleCategoryClick("assigned")}
          >
            📌 Assigned Tasks
          </li>
          <li
            className={selectedCategory === "pending" ? "active" : ""}
            onClick={() => handleCategoryClick("pending")}
          >
            ⏳ Pending Tasks
          </li>
          <li
            className={selectedCategory === "completed" ? "active" : ""}
            onClick={() => handleCategoryClick("completed")}
          >
            ✅ Completed Tasks
          </li>
          <li
            className={selectedCategory === "deadlines" ? "active" : ""}
            onClick={() => handleCategoryClick("deadlines")}
          >
            📅 Deadlines
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="task-content">
        {/* Assigned Tasks */}
        {selectedCategory === "assigned" && (
          <div className="task-category">
            <h2>📌 Assigned Tasks</h2>
            <ul className="task-list">
              {tasks
                .filter((task) => task.status === "assigned")
                .map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <span className="assigned-date">
                      Assigned: {task.assignedDate}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Pending Tasks */}
        {selectedCategory === "pending" && (
          <div className="task-category">
            <h2>⏳ Pending Tasks</h2>
            <ul className="task-list">
              {tasks
                .filter((task) => task.status === "pending")
                .map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <button
                      className="mark-btn"
                      onClick={() => markAsCompleted(task.id)}
                    >
                      Mark as Completed
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Completed Tasks */}
        {selectedCategory === "completed" && (
          <div className="task-category">
            <h2>✅ Completed Tasks</h2>
            <ul className="task-list">
              {tasks
                .filter((task) => task.status === "completed")
                .map((task) => (
                  <li key={task.id}>
                    <span>{task.title}</span>
                    <button className="submit-btn">Submit</button>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Deadlines */}
        {selectedCategory === "deadlines" && (
          <div className="task-category">
            <h2>📅 Deadlines</h2>
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id}>
                  <span>{task.title}</span>
                  <span className="deadline">Deadline: {task.deadline}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Account Icon */}
      <div className="user-account">
        <div className="user-avatar" onClick={toggleLogout}>
          V
        </div>
        {showLogout && (
          <div className="logout-dropdown">
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
