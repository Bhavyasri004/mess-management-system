import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

/* Move defaultWeekly outside component */
const defaultWeekly = {
  Monday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Tuesday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Wednesday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Thursday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Friday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Saturday: { breakfast: "", lunch: "", snacks: "", dinner: "" },
  Sunday: { breakfast: "", lunch: "", snacks: "", dinner: "" }
};

function AdminDashboard() {

  const navigate = useNavigate();

  const [daily, setDaily] = useState({
    breakfast: "",
    lunch: "",
    snacks: "",
    dinner: ""
  });

  const [weekly, setWeekly] = useState(defaultWeekly);

  const [filter, setFilter] = useState("today");
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const today = new Date().toLocaleString("en-US", { weekday: "long" });

  /* Protect admin route */
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      alert("Access denied");
      navigate("/");
    }

  }, [navigate]);

  /* Load saved menu from backend */
  useEffect(() => {

    fetch("https://mess-management-system-4.onrender.com/api/menu")
      .then(res => res.json())
      .then(data => {

        if (data) {

          setWeekly({
            ...defaultWeekly,
            ...(data.weekly || {})
          });

          setDaily(data.daily || {
            breakfast: "",
            lunch: "",
            snacks: "",
            dinner: ""
          });

        }

      })
      .catch(err => console.error("Error loading menu:", err));

  }, []);

  /* Update daily menu based on weekly menu */
  useEffect(() => {

    if (weekly[today]) {
      setDaily(weekly[today]);
    }

  }, [weekly, today]);

  /* Load users and feedback */
  useEffect(() => {

    fetch("https://mess-management-system-4.onrender.com/api/userlogs")
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch(`https://mess-management-system-4.onrender.com/api/userlogs?filter=${filter}`)
      .then(res => res.json())
      .then(data => setFeedbacks(data));

  }, [filter]);

  const updateWeekly = (day, field, value) => {

    setWeekly({
      ...weekly,
      [day]: {
        ...weekly[day],
        [field]: value
      }
    });

  };

  const saveMenu = () => {

    fetch("https://mess-management-system-4.onrender.com/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ daily, weekly })
    })
      .then(res => res.json())
      .then(data => alert(data.message))
      .catch(err => {
        console.error(err);
        alert("Failed to save menu");
      });

  };

  return (
    <div className="admin-container">

      <h2>Admin Dashboard</h2>

      {/* Daily Menu */}
      <div className="menu-section">

        <h3>Daily Menu (Auto from {today})</h3>

        <div className="input-row">
          <input value={daily.breakfast || ""} readOnly placeholder="Breakfast" />
          <input value={daily.lunch || ""} readOnly placeholder="Lunch" />
          <input value={daily.snacks || ""} readOnly placeholder="Snacks" />
          <input value={daily.dinner || ""} readOnly placeholder="Dinner" />
        </div>

      </div>

      {/* Weekly Menu */}
      <div className="menu-section">

        <h3>Weekly Menu</h3>

        {Object.keys(weekly).map(day => (

          <div key={day} className="day-card">

            <h4>{day}</h4>

            <input
              placeholder="Breakfast"
              value={weekly[day].breakfast || ""}
              onChange={(e)=>updateWeekly(day,"breakfast",e.target.value)}
            />

            <input
              placeholder="Lunch"
              value={weekly[day].lunch || ""}
              onChange={(e)=>updateWeekly(day,"lunch",e.target.value)}
            />

            <input
              placeholder="Snacks"
              value={weekly[day].snacks || ""}
              onChange={(e)=>updateWeekly(day,"snacks",e.target.value)}
            />

            <input
              placeholder="Dinner"
              value={weekly[day].dinner || ""}
              onChange={(e)=>updateWeekly(day,"dinner",e.target.value)}
            />

          </div>

        ))}

        <button className="save-btn" onClick={saveMenu}>
          Save Menu
        </button>

      </div>

      {/* Logged Users */}
      <h3>Users Logged In</h3>

      <table border="1">

        <thead>
          <tr>
            <th>Email</th>
            <th>Login Time</th>
          </tr>
        </thead>

        <tbody>

          {users.length > 0 ? (

            users.map((u,index)=>(
              <tr key={index}>
                <td>{u.email}</td>
                <td>{new Date(u.loginTime).toLocaleString()}</td>
              </tr>
            ))

          ) : (

            <tr>
              <td colSpan="2">No users logged in yet</td>
            </tr>

          )}

        </tbody>

      </table>

      {/* Feedback Filter */}
      <div style={{ marginTop:"20px", marginBottom:"10px" }}>

        <label style={{ marginRight:"10px" }}>Filter Feedback:</label>

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="">All Feedback</option>
        </select>

      </div>

      {/* Feedback Table */}
      <h3>User Feedback</h3>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Meal</th>
            <th>Feedback</th>
            <th>Comments</th>
          </tr>
        </thead>

        <tbody>

          {feedbacks.length > 0 ? (

            feedbacks.map((f,index)=>(
              <tr key={index}>
                <td>{f.name}</td>
                <td>{f.meal}</td>
                <td>{f.feedback}</td>
                <td>{f.comments}</td>
              </tr>
            ))

          ) : (

            <tr>
              <td colSpan="4">No feedback available</td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default AdminDashboard;