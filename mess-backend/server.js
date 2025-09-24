const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample menu data
const weeklyMenu = {
  Monday: ["Rice", "Dal", "Paneer Curry", "Salad"],
  Tuesday: ["Chapati", "Chole", "Jeera Rice", "Sweet"],
  Wednesday: ["Poori", "Aloo Sabzi", "Curd", "Pickle"],
  Thursday: ["Fried Rice", "Manchurian", "Soup"],
  Friday: ["Veg Biryani", "Raita", "Papad"],
  Saturday: ["Idli", "Sambar", "Chutney"],
  Sunday: ["Pulao", "Paneer Butter Masala", "Gulab Jamun"]
};

// API: Get today's menu
app.get("/api/today", (req, res) => {
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  res.json({ day: today, menu: weeklyMenu[today] || ["No menu available"] });
});

// API: Get full week menu
app.get("/api/week", (req, res) => {
  res.json(weeklyMenu);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
