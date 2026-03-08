import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="footer-section">
          <h3>Mess Management</h3>
          <p>
            Providing nutritious and delicious meals to students with care and quality.
          </p>
          <div className="socials">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐦
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Daily Meals</li>
            <li>Special Diets</li>
            <li>Event Catering</li>
            <li>Meal Planning</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>College Campus, City</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📧 SVECWmess@college.edu</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Mess Management System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
