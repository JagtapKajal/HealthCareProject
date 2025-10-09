import React from "react";
import "./Login.css";
import logo from "../assets/Images/PMCLogo.webp";

export default function LoginForm() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Pune Munciple Corporation</h2>
      </div>

      <div className="login-page">
        <div className="welcomebox">
          <h2>Welcome !</h2>
          <p>Login by entering the information below</p>
        </div>
        <div className="login-box">
          <form className="login-form">
            <div className="input-group1">
              <span className="icon">✉️</span>
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">Email / Mobile *</label>
            </div>
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input type="password" id="password" required placeholder=" " />
              <label htmlFor="password">Password *</label>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password ?</a>
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>

            <div className="or-divider">OR</div>

            <p className="register-text">
              Don’t have an account? <a href="/register">Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
