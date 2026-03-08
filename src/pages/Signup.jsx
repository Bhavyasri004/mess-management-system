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

  const handleSignup = () => {

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    navigate("/login");
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Sign Up</h2>

        <input
          placeholder="Registration Number"
          onChange={(e)=>setUser({...user, regno:e.target.value})}
        />

        <input
          placeholder="Email"
          onChange={(e)=>setUser({...user, email:e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setUser({...user, password:e.target.value})}
        />

        <button className="signup-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="login-link">
          Already have an account?{" "}
          <span onClick={()=>navigate("/login")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;