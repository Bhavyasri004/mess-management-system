const express = require("express");
const router = express.Router();
const UserLog = require("../models/UserLog");

router.post("/", async (req, res) => {
  const log = new UserLog({
    email: req.body.email
  });

  await log.save();
  res.json({ message: "Login saved" });
});

router.get("/", async (req, res) => {
  const logs = await UserLog.find().sort({ loginTime: -1 });
  res.json(logs);
});

module.exports = router;