import express from "express";
import {
  getBooking,
  addBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/BookingController.js";

const router = express.Router();

// fetch all hotels
router.route("/").get(getBooking);

router.route("/add").post(addBooking);

router.route("/update").put(updateBooking);

router.route("/remove").delete(deleteBooking);

export default router;
