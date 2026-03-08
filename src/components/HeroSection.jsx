import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/menu");   // already logged in
    } else {
      navigate("/login");  // redirect to login
    }
  };

  return (
    <section className="hero">
      <h1>Eat Healthy, <span>Stay Healthy</span></h1>
      <p>
        Experience nutritious and delicious meals crafted with care for your
        health and satisfaction
      </p>

      {/* Button with login check */}
      <button className="menu-btn" onClick={handleViewMenu}>
        View Today’s Menu
      </button>

      <div className="features">
        <div className="feature">
          <h3>🍲 Fresh & Nutritious</h3>
          <p>Daily fresh ingredients prepared with care</p>
        </div>

        <div className="feature">
          <h3>⏰ Timely Service</h3>
          <p>Meals served on time, every time</p>
        </div>

        <div className="feature">
          <h3>👥 Community Focused</h3>
          <p>Bringing students together over great food</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;