import React, { useState } from "react";
import "./registration.css";

export default function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    // Optional: validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/Users/addUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
        window.location.href = "/login"; // redirect to login page
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Server not reachable!");
    }
  };

  return (
    <div className="registration-page">
      <div className="register-container">
        <div className="register-header">
          <h2>Registration</h2>
          <p>Sign up by entering the information below</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group1">
              <span className="icon">👤</span>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <label>Firstname *</label>
            </div>
            <div className="input-group1">
              <span className="icon">👤</span>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
              <label>Lastname *</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group1">
              <span className="icon">✉️</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label>Email *</label>
            </div>
            <div className="input-group1">
              <span className="icon">📱</span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <label>Mobile Number *</label>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label>Password *</label>
            </div>
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <label>Confirm Password *</label>
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
