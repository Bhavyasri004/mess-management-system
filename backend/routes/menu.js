const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

// GET full menu
router.get("/", async (req, res) => {
  try {
    const menu = await Menu.findOne();
    res.json(menu);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ message: "Error fetching menu" });
  }
});

// GET today's menu
router.get("/today", async (req, res) => {
  try {
    const menu = await Menu.findOne();

    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    const today = new Date().toLocaleString("en-US", {
      weekday: "long"
    });

    const todaysMenu = menu.weekly[today];

    res.json({
      day: today,
      menu: todaysMenu
    });

  } catch (error) {
    console.error("Error fetching today's menu:", error);
    res.status(500).json({ message: "Error fetching today's menu" });
  }
});

// POST menu (Admin updates menu)
router.post("/", async (req, res) => {
  try {
    console.log("Received menu data:", req.body);

    // delete previous menu so only latest menu exists
    await Menu.deleteMany();

    const menu = new Menu(req.body);
    await menu.save();

    console.log("Menu saved to MongoDB");

    res.json({ message: "Menu updated successfully" });
  } catch (error) {
    console.error("Error saving menu:", error);
    res.status(500).json({ message: "Error saving menu" });
  }
});

module.exports = router;