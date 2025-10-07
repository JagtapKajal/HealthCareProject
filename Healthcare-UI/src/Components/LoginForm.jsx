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
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="button-group">
            <button className="B1" type="submit">Login</button>
            <button type="button">Cancel</button>
          </div>
          <p>
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
