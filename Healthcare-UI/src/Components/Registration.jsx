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
            <div className="input-group1">
              <span className="icon">👤</span>
              <input type="text" placeholder=" " required />
              <label htmlFor="Firstname">Firstname *</label>
            </div>
            <div className="input-group1">
              <span className="icon">👤</span>
              <input type="text" placeholder="" required />
              <label htmlFor="Lastname">Lastname *</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group1">
              <span className="icon">✉️</span>
              <input type="email" placeholder=" " required />
              <label htmlFor="Email">Email *</label>
            </div>
            <div className="input-group1">
              <span className="icon">📱</span>
              <input type="tel" placeholder=" " required />
              <label htmlFor="Mobile Number">Mobile Number *</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input type="password" placeholder=" " required />
              <label htmlFor="Password">Password *</label>
            </div>
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input type="password" placeholder=" " required />
              <label htmlFor="Confirm Password">Confirm Password *</label>
            </div>
          </div>

          <button className="button" type="submit">
            Sign up
          </button>

          <p className="login-text">
            Already have an account? <a href="/login">Login</a> here.
          </p>
        </form>
      </div>
    </div>
  );
}
