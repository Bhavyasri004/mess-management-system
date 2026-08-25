const express = require("express");

const router = express.Router();

const UserLog = require("../models/UserLog");


// ===============================
// SAVE USER LOGIN
// ===============================

router.post("/", async (req, res) => {

  try {

    const log = new UserLog({

      email: req.body.email,

      regno: req.body.regno

    });

    await log.save();

    res.json({
      message: "Login saved"
    });

  } catch (error) {

    console.error(
      "Error saving login:",
      error
    );

    res.status(500).json({
      message: "Error saving login"
    });

  }

});


// ===============================
// GET LOGIN RECORDS
// ===============================

router.get("/", async (req, res) => {

  try {

    const logs = await UserLog
      .find()
      .sort({ loginTime: -1 });

    res.json(logs);

  } catch (error) {

    console.error(
      "Error fetching login records:",
      error
    );

    res.status(500).json({
      message: "Error fetching login records"
    });

  }

});


module.exports = router;