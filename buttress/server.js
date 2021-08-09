import path from "path";
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

// change body response from xml to json
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", function (req, res) {
  res.send("Server is working A-okay!");
});

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
