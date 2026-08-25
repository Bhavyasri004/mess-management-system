import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Fields are read-only until the user clicks them
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // =========================
    // ADMIN LOGIN
    // =========================

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      // Go to Admin Dashboard immediately
      navigate("/admin", {
        state: {
          message: "Admin Login Successful"
        }
      });

      return;
    }

    // =========================
    // NORMAL USER LOGIN
    // =========================

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "user");

      // Save login record in backend
      try {
        await fetch(
          "https://mess-management-system-6.onrender.com/api/userlogs",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({
              email: formData.email
            })
          }
        );
      } catch (error) {
        console.error(
          "Error saving login record:",
          error
        );
      }

      // Go to Menu
      navigate("/menu", {
        state: {
          message: "User Login Successful"
        }
      });

    } else {

      alert(
        "Invalid credentials or please sign up first"
      );

    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Login</h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >

          {/* ========================= */}
          {/* EMAIL */}
          {/* ========================= */}

          <div className="form-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}

              readOnly={!emailActive}

              onFocus={() =>
                setEmailActive(true)
              }

              autoComplete="off"

              required
            />

          </div>


          {/* ========================= */}
          {/* PASSWORD */}
          {/* ========================= */}

          <div className="form-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}

              readOnly={!passwordActive}

              onFocus={() =>
                setPasswordActive(true)
              }

              autoComplete="new-password"

              required
            />

          </div>


          {/* ========================= */}
          {/* LOGIN BUTTON */}
          {/* ========================= */}

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>


        {/* ========================= */}
        {/* SIGN UP */}
        {/* ========================= */}

        <p
          style={{
            marginTop: "10px",
            textAlign: "center"
          }}
        >
          New user?{" "}

          <span
            style={{
              color: "blue",
              cursor: "pointer"
            }}
            onClick={() =>
              navigate("/signup")
            }
          >
            Sign Up
          </span>

        </p>

      </div>

    </div>
  );
}

export default Login;