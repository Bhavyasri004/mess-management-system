import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    regno: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = () => {

    if (
      !user.regno.trim() ||
      !user.email.trim() ||
      !user.password.trim()
    ) {
      alert("Please fill all the fields");
      return;
    }

    // Save student details
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    console.log("Saved student:", user);

    alert("Signup successful!");

    navigate("/login");
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Student Sign Up</h2>

        <input
          type="text"
          name="regno"
          placeholder="Registration Number"
          value={user.regno}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="College Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p className="login-link">
          Already have an account?{" "}

          <span onClick={() => navigate("/login")}>
            Login
          </span>

        </p>

      </div>

    </div>
  );
}

export default Signup;