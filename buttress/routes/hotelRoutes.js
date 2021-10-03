import express from "express";
import {
  getHotels,
  addHotels,
  updateHotels,
  deleteHotels,
} from "../controllers/hotelController.js";

const router = express.Router();

// fetch all hotels
router.route("/").get(getHotels);

router.route("/add").post(addHotels);

router.route("/update").put(updateHotels);

router.route("/remove").delete(deleteHotels);

export default router;
