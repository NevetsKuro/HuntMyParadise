import express from "express";
import {
  getHotelOffer,
  addHotelOffer,
  updateHotelOffer,
  deleteHotelOffer,
} from "../controllers/HotelOfferController.js";

const router = express.Router();

// fetch all hotels
router.route("/").get(getHotelOffer);

router.route("/add").post(addHotelOffer);

router.route("/update").put(updateHotelOffer);

router.route("/remove").delete(deleteHotelOffer);

export default router;
