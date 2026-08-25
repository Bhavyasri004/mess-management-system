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
    console.log(
      "Received menu data:",
      JSON.stringify(req.body, null, 2)
    );

    let menu = await Menu.findOne();

    if (menu) {
      menu.daily = req.body.daily;
      menu.weekly = req.body.weekly;

      await menu.save();
    } else {
      menu = new Menu({
        daily: req.body.daily,
        weekly: req.body.weekly
      });

      await menu.save();
    }

    console.log("Menu saved to MongoDB");

    res.status(200).json({
      message: "Menu updated successfully",
      menu
    });

  } catch (error) {
    console.error("❌ ERROR SAVING MENU:", error);

    res.status(500).json({
      message: "Error saving menu",
      error: error.message
    });
  }
});

module.exports = router;