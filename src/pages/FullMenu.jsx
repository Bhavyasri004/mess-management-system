import React from "react";
import "./FullMenu.css";

function FullMenu() {
  // Full week menu data
  const weekMenu = {
    Monday: {
      Breakfast: "Oatmeal, Fruits",
      Lunch: "Rice, Dal, Vegetable",
      Snacks: "Fruit Salad",
      Dinner: "Chapati, Paneer Curry",
    },
    Tuesday: {
      Breakfast: "Poha, Milk",
      Lunch: "Rice, Rajma",
      Snacks: "Cookies",
      Dinner: "Chapati, Mixed Veg",
    },
    Wednesday: {
      Breakfast: "Idli, Sambar",
      Lunch: "Fried Rice, Paneer",
      Snacks: "Nuts",
      Dinner: "Chapati, Dal",
    },
    Thursday: {
      Breakfast: "Toast, Juice",
      Lunch: "Rice, Chole",
      Snacks: "Biscuits",
      Dinner: "Roti, Vegetable Curry",
    },
    Friday: {
      Breakfast: "Upma, Tea",
      Lunch: "Rice, Rajma",
      Snacks: "Fruit",
      Dinner: "Chapati, Paneer",
    },
    Saturday: {
      Breakfast: "Dosa, Sambar",
      Lunch: "Biryani, Raita",
      Snacks: "Sandwich",
      Dinner: "Chapati, Mixed Veg",
    },
    Sunday: {
      Breakfast: "Pancakes, Juice",
      Lunch: "Rice, Dal, Vegetable",
      Snacks: "Cake",
      Dinner: "Chapati, Paneer Curry",
    },
  };

  const days = Object.keys(weekMenu);
  const meals = ["Breakfast", "Lunch", "Snacks", "Dinner"];

  return (
    <div className="full-menu-container">
      <h1>Full Week Menu</h1>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Meal / Day</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal}>
              <td className="meal-type">{meal}</td>
              {days.map((day) => (
                <td key={day}>{weekMenu[day][meal]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FullMenu;
