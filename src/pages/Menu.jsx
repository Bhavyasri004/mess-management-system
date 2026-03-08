import React, { useEffect, useState } from "react";
import "./Menu.css";

function Menu() {
  const [menu, setMenu] = useState(null);
  const [view, setView] = useState("daily");

  useEffect(() => {
    fetch("https://mess-management-system-4.onrender.com/api/userlogs")
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      })
      .catch(err => console.error(err));
  }, []);

  if (!menu) {
    return <h2 style={{ textAlign: "center" }}>Loading Menu...</h2>;
  }

  // Safe fallback
  const dailyMenu = menu.daily || {};
  const weeklyMenu = menu.weekly || {};
  const days = Object.keys(weeklyMenu);

  return (
    <div className="todays-menu">
      <h1>Mess Menu</h1>

      {/* Toggle Buttons */}
      <div className="menu-toggle">
        <button
          className={view === "daily" ? "active" : ""}
          onClick={() => setView("daily")}
        >
          Today's Menu
        </button>

        <button
          className={view === "weekly" ? "active" : ""}
          onClick={() => setView("weekly")}
        >
          Weekly Menu
        </button>
      </div>
{/* DAILY MENU - TABLE FORMAT */}
{view === "daily" && (
  <div className="weekly-table-container">
    {Object.entries(dailyMenu).length === 0 ? (
      <p style={{ textAlign: "center" }}>No daily menu available</p>
    ) : (
      <table className="weekly-table">
        <thead>
          <tr>
            <th>Meal Type</th>
            <th>Items</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(dailyMenu).map(([meal, items]) => (
            <tr key={meal}>
              <td className="meal-name">{meal.toUpperCase()}</td>
              <td>{(items || []).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}

      

      {/* WEEKLY MENU - TABLE FORMAT */}
      {view === "weekly" && (
        <div className="weekly-table-container">
          {days.length === 0 ? (
            <p style={{ textAlign: "center" }}>No weekly menu available</p>
          ) : (
            <table className="weekly-table">
              <thead>
                <tr>
                  <th>Meal / Day</th>
                  {days.map(day => (
                    <th key={day}>{day}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {["breakfast", "lunch", "snacks", "dinner"].map(meal => (
                  <tr key={meal}>
                    <td className="meal-name">{meal.toUpperCase()}</td>

                    {days.map(day => (
                      <td key={day}>
                        {(weeklyMenu[day]?.[meal] || []).join(", ")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;
