import React from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter Admin Username" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button className="login-btn">Login</button>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
