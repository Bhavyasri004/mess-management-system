import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <h1>About Mess Management System</h1>

      <p className="about-text">
        The Mess Management System is a web-based platform designed to improve
        communication between students and mess administrators. It allows
        students to view the daily and weekly menu, submit feedback about meals,
        and stay updated about mess activities.
      </p>

      <p className="about-text">
        The system also provides an admin dashboard where administrators can
        update menus, monitor feedback, and improve food quality based on
        student suggestions.
      </p>

      {/* Mess Timings Table */}
      <h2 className="feature-title">Mess Timings</h2>

      <table className="timing-table">
        <thead>
          <tr>
            <th>Meal</th>
            <th>Timing</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>7:00 AM – 9:00 AM</td>
          </tr>

          <tr>
            <td>Lunch</td>
            <td>11:40 PM – 2:00 PM</td>
          </tr>

          <tr>
            <td>Snacks</td>
            <td>4:00 PM – 6:00 PM</td>
          </tr>

          <tr>
            <td>Dinner</td>
            <td>7:00 PM – 9:00 PM</td>
          </tr>
        </tbody>
      </table>

      {/* Features */}
      <h2 className="feature-title">Key Features</h2>

      <div className="features-grid">

        <div className="feature-card">
          <h3>🍲 Daily Menu</h3>
          <p>Students can quickly view today's mess menu.</p>
        </div>

        <div className="feature-card">
          <h3>📅 Weekly Menu</h3>
          <p>The weekly meal plan helps students know upcoming meals.</p>
        </div>

        <div className="feature-card">
          <h3>💬 Feedback System</h3>
          <p>Students can submit feedback about meals and suggestions.</p>
        </div>

        <div className="feature-card">
          <h3>⚙ Admin Dashboard</h3>
          <p>Admins can manage menus and monitor feedback.</p>
        </div>

      </div>

    </div>
  );
}

export default About;