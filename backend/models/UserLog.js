const mongoose = require("mongoose");

const userLogSchema = new mongoose.Schema({
  email: String,
  loginTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("UserLog", userLogSchema);