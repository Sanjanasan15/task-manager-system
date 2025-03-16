import { Link } from "react-router-dom";
import "./WelcomePage.css";
import taskImage from "/task-manager-cartoon.png"; // Ensure this image is in 'frontend/public/'

function WelcomePage() {
    return (
        <div className="welcome-container">
            <div className="welcome-box">
                <h1 className="welcome-title">Welcome to <span>Task Manager</span></h1>
                <p className="welcome-description">
                    Organize your tasks efficiently and stay productive. Manage your daily activities seamlessly with our user-friendly platform.
                </p>
                <img src="/task-manager-cartoon.png" alt="Task Management Illustration" className="task-image" />

                <div className="button-container">
                    <Link to="/login"><button className="login-btn">LOGIN</button></Link>
                    <Link to="/signup"><button className="signup-btn">SIGN UP</button></Link>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
