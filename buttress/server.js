/* eslint-disable import/extensions */
import express from "express";
import dotenv from "dotenv";
import debug from "debug";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import bookingRoutes from "./routes/BookingRoutes.js";
import bookmarksRoutes from "./routes/BookmarksRoutes.js";
import ownerRoutes from "./routes/ownerRoutes.js";
import hotelOfferRoutes from "./routes/HotelOfferRoutes.js";

// const __dirname = path.resolve();
const logger = debug("http");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

// change body response from xml to json
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/bookmarks", bookmarksRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/offers", hotelOfferRoutes);

app.get("/", (req, res) => {
  res.send("HuntMyparadise Server is working A-okay!");
});

app.listen(
  PORT,
  logger(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
