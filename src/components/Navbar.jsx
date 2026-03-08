import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");

    alert("Logged out successfully");

    navigate("/");
  };

  return (
    <nav className="navbar">

      <h2 className="logo">SVECW Mess</h2>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>


        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;