import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/Images/PMCLogo.webp";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent reload

    try {
      const response = await fetch("http://localhost:8080/Users/findUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");

        // Example: Save token or user info in localStorage if backend sends it
        // localStorage.setItem("user", JSON.stringify(data));

        // Redirect after login
        window.location.href = "/dashboard"; // or any protected page
      } else if (response.status === 401) {
        alert("Invalid credentials!");
      } else {
        alert("Login failed. Try again!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server not reachable!");
    }
  };

  return (
    <>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Pune Municipal Corporation</h2>
      </div>

      <div className="login-page">
        <div className="welcomebox">
          <h2>Welcome!</h2>
          <p>Login by entering the information below</p>
        </div>
        <div className="login-box">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group1">
              <span className="icon">✉️</span>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Email *</label>
            </div>
            <div className="input-group1">
              <span className="icon">🔒</span>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="password">Password *</label>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
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
