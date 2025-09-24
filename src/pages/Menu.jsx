
import React from "react";
import "./Menu.css";

function Menu() {
  const todayMenu = [
    {
      id: 1,
      title: "Healthy Breakfast",
      time: "7:00 AM - 9:00 AM",
      type: "Breakfast",
      rating: "4.5",
      items: ["Oatmeal with Fruits", "Toast & Butter", "Fresh Orange Juice"],
    },
    {
      id: 2,
      title: "Nutritious Lunch",
      time: "12:00 PM - 2:00 PM",
      type: "Lunch",
      rating: "4.7",
      items: ["Rice", "Dal Tadka", "Mixed Vegetable", "Chapati"],
    },
    {
      id: 3,
      title: "Wholesome Dinner",
      time: "7:00 PM - 9:00 PM",
      type: "Dinner",
      rating: "4.6",
      items: ["Jeera Rice", "Paneer Curry", "Roti", "Sweet Dish"],
    },
  ];

  return (
    <div className="todays-menu">
      <h1>Today's Menu</h1>
      <p>Fresh, nutritious meals prepared with care for your health and taste</p>

      <div className="menu-cards">
        {todayMenu.map((meal) => (
          <div key={meal.id} className="meal-card">
            <div className="meal-header">
              <h2>{meal.title}</h2>
              <span className="tag">Today</span>
            </div>
            <p className="meal-time">⏰ {meal.time}</p>
            <p className="meal-rating">⭐ {meal.rating}</p>
            <span className="meal-type">{meal.type}</span>
            <ul>
              {meal.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button className="full-menu-btn">View Full Menu →</button>
    </div>
  );
}

export default Menu;
