import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">

      <h1>Contact Us</h1>

      <p className="contact-text">
        If you have any suggestions, complaints, or feedback regarding the mess
        services, feel free to contact the mess management team.
      </p>

      <div className="contact-info">

        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>SVECW Hostel Mess</p>
          <p>Bhimavaram, Andhra Pradesh</p>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>mess@svecw.edu.in</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 9052259371</p>
        </div>

        <div className="contact-card">
          <h3>⏰ Office Hours</h3>
          <p>Monday - Saturday</p>
          <p>9:00 AM - 5:00 PM</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;