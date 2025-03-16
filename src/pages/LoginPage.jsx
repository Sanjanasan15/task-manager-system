import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <p>Select your login type</p>
        <div className="button-container">
          <Link to="/admin-login" className="btn btn-admin">Admin Login</Link>
          <Link to="/user-login" className="btn btn-user">User Login</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
