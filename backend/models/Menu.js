const mongoose = require("mongoose");

const mealSchema = {
  breakfast: [String],
  lunch: [String],
  snacks: [String],
  dinner: [String]
};

const weeklySchema = {
  Monday: mealSchema,
  Tuesday: mealSchema,
  Wednesday: mealSchema,
  Thursday: mealSchema,
  Friday: mealSchema,
  Saturday: mealSchema,
  Sunday: mealSchema
};

const menuSchema = new mongoose.Schema({
  daily: mealSchema,
  weekly: weeklySchema
});

module.exports = mongoose.model("Menu", menuSchema);
