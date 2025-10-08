import React from "react";
import "./Login.css";
import logo from "../assets/Images/logo.jpg";

export default function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Logo" />
        </div>

        <form className="login-form">
          <div className="Welcome-Box">
            {" "}
            <h2>Welcome! </h2>
            <p>Login By Entering the Information Below</p>{" "}
          </div>

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="button-group">
            <button className="B1" type="submit">
              Login 
            </button>
        
          </div>
          
          <p>
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
