import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Admin login
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      alert("Admin Login Successful");
      navigate("/admin");
      return;
    }

    // Normal user login
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");

      alert("User Login Successful");

      // ⭐ Save login record in backend (NEW PART)
      fetch("https://mess-management-system-6.onrender.com/api/userlogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: formData.email
        })
      });

      navigate("/menu");

    } else {

      alert("Invalid credentials or please sign up first");

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          New user?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
}

export default Login;