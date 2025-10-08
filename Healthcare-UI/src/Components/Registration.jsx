import React from "react";
import "./registration.css";

export default function Registration() {
  return (
    <div className="registration-page">
      <div className="register-container">
        <div className="register-header">
          <h2>Registration</h2>
          <p>Sign up by entering the information below</p>
        </div>
        <form className="register-form">
          <div className="form-row">
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Firstname" required />
            </div>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Lastname" required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <span className="icon">✉️</span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <span className="icon">📱</span>
              <input type="tel" placeholder="Mobile Number" required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>

          <button type="submit">Sign up</button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a> here.
          </p>
        </form>
      </div>
    </div>
  );
}
