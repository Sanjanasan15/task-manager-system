import React from "react";
import { Link } from "react-router-dom";
import "./UserLogin.css";

const UserLogin = () => {
  return (
    <div className="user-login-container">
      <div className="user-login-box">
        <h2>User Login</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="btn-login">Login</button>
        </form>
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default UserLogin;
