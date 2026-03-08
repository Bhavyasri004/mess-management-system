import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedBack.css";

function Feedback() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    meal: "",
    feedback: "",
    comments: ""
  });

  // Protect page
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      alert("Please login first");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("https://mess-management-system-6.onrender.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        meal: "",
        feedback: "",
        comments: ""
      });

    } catch (error) {

      console.error(error);
      alert("Error submitting feedback");

    }

  };

  return (
    <div className="feedback-container">

      <div className="feedback-card">

        <h2>Student Feedback</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Meal</label>
            <select
              name="meal"
              value={formData.meal}
              onChange={handleChange}
              required
            >
              <option value="">Select Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Snacks">Snacks</option>
              <option value="Dinner">Dinner</option>
            </select>
          </div>

          <div className="form-group">

            <label>Feedback</label>

            <label>
              <input
                type="radio"
                name="feedback"
                value="Good"
                onChange={handleChange}
              />
              Good
            </label>

            <label>
              <input
                type="radio"
                name="feedback"
                value="Satisfactory"
                onChange={handleChange}
              />
              Satisfactory
            </label>

            <label>
              <input
                type="radio"
                name="feedback"
                value="Bad"
                onChange={handleChange}
              />
              Bad
            </label>

          </div>

          <div className="form-group">
            <label>Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>

        </form>

      </div>

    </div>
  );
}

export default Feedback;