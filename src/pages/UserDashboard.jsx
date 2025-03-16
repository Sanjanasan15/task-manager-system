import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <p>Manage your tasks efficiently and stay organized.</p>
      <div className="task-section">
        <h3>Your Tasks</h3>
        <ul>
          <li>Task 1 - Pending</li>
          <li>Task 2 - In Progress</li>
          <li>Task 3 - Completed</li>
        </ul>
      </div>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default UserDashboard;
