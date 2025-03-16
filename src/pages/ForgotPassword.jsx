import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        <p>Enter your email address to reset your password.</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-reset">Reset Password</button>
        </form>
        <Link to="/login" className="back-to-login">Back to Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
