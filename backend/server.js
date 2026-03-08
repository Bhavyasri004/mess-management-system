const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const feedbackRoutes = require("./routes/feedback");
const menuRoutes = require("./routes/menu");
const userLogRoutes = require("./routes/userlogs");

app.use("/api/userlogs", userLogRoutes);

app.use("/api/feedback", feedbackRoutes);
app.use("/api/menu", menuRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
