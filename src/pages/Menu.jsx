import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

function Menu() {

  const location = useLocation();

  const [menu, setMenu] = useState(null);
  const [view, setView] = useState("daily");

  const [successMessage, setSuccessMessage] = useState(
    location.state?.message || ""
  );


  // ==========================================
  // LOAD MENU
  // ==========================================

  useEffect(() => {

    const loadMenu = async () => {

      try {

        // Get complete weekly menu
        const weeklyResponse = await fetch(
          "https://mess-management-system-6.onrender.com/api/menu"
        );

        if (!weeklyResponse.ok) {
          throw new Error(
            "Failed to fetch weekly menu"
          );
        }

        const weeklyData =
          await weeklyResponse.json();


        // Get today's menu
        const todayResponse = await fetch(
          "https://mess-management-system-6.onrender.com/api/menu/today"
        );

        if (!todayResponse.ok) {
          throw new Error(
            "Failed to fetch today's menu"
          );
        }

        const todayData =
          await todayResponse.json();


        // Store both menus
        setMenu({

          daily: todayData.menu || {},

          weekly: weeklyData.weekly || {},

          today: todayData.day || ""

        });

      } catch (error) {

        console.error(
          "Error loading menu:",
          error
        );

        setMenu({

          daily: {},

          weekly: {},

          today: ""

        });

      }

    };


    loadMenu();

  }, []);


  // ==========================================
  // HIDE SUCCESS MESSAGE
  // ==========================================

  useEffect(() => {

    if (successMessage) {

      const timer = setTimeout(() => {

        setSuccessMessage("");

      }, 3000);


      return () => clearTimeout(timer);

    }

  }, [successMessage]);


  // ==========================================
  // LOADING
  // ==========================================

  if (!menu) {

    return (
      <h2 style={{ textAlign: "center" }}>
        Loading Menu...
      </h2>
    );

  }


  const dailyMenu = menu.daily || {};

  const weeklyMenu = menu.weekly || {};

  const days = Object.keys(weeklyMenu);


  return (

    <div className="todays-menu">


      {/* ================================= */}
      {/* SUCCESS MESSAGE */}
      {/* ================================= */}

      {successMessage && (

        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            border: "1px solid #c3e6cb",
            padding: "12px 20px",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "600"
          }}
        >
          ✓ {successMessage}
        </div>

      )}


      <h1>Mess Menu</h1>


      {/* ================================= */}
      {/* TODAY'S DAY */}
      {/* ================================= */}

      {menu.today && (

        <h3 style={{ textAlign: "center" }}>

          Today's Menu - {menu.today}

        </h3>

      )}


      {/* ================================= */}
      {/* TOGGLE BUTTONS */}
      {/* ================================= */}

      <div className="menu-toggle">

        <button
          className={
            view === "daily"
              ? "active"
              : ""
          }
          onClick={() =>
            setView("daily")
          }
        >
          Today's Menu
        </button>


        <button
          className={
            view === "weekly"
              ? "active"
              : ""
          }
          onClick={() =>
            setView("weekly")
          }
        >
          Weekly Menu
        </button>

      </div>


      {/* ================================= */}
      {/* TODAY'S MENU */}
      {/* ================================= */}

      {view === "daily" && (

        <div className="weekly-table-container">

          {Object.keys(dailyMenu).length === 0 ? (

            <p
              style={{
                textAlign: "center"
              }}
            >
              No menu available for today.
            </p>

          ) : (

            <table className="weekly-table">

              <thead>

                <tr>

                  <th>
                    Meal Type
                  </th>

                  <th>
                    Items
                  </th>

                </tr>

              </thead>


              <tbody>

                {Object.entries(
                  dailyMenu
                ).map(
                  ([meal, items]) => (

                    <tr key={meal}>

                      <td className="meal-name">

                        {meal.toUpperCase()}

                      </td>


                      <td>

                        {Array.isArray(items)
                          ? items.join(", ")
                          : items || ""}

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          )}

        </div>

      )}


      {/* ================================= */}
      {/* WEEKLY MENU */}
      {/* ================================= */}

      {view === "weekly" && (

        <div className="weekly-table-container">

          {days.length === 0 ? (

            <p
              style={{
                textAlign: "center"
              }}
            >
              No weekly menu available.
            </p>

          ) : (

            <table className="weekly-table">

              <thead>

                <tr>

                  <th>
                    Meal / Day
                  </th>


                  {days.map((day) => (

                    <th key={day}>
                      {day}
                    </th>

                  ))}

                </tr>

              </thead>


              <tbody>

                {[
                  "breakfast",
                  "lunch",
                  "snacks",
                  "dinner"
                ].map((meal) => (

                  <tr key={meal}>

                    <td className="meal-name">

                      {meal.toUpperCase()}

                    </td>


                    {days.map((day) => (

                      <td key={day}>

                        {Array.isArray(
                          weeklyMenu[day]?.[meal]
                        )
                          ? weeklyMenu[day][meal].join(", ")
                          : weeklyMenu[day]?.[meal] || ""}

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