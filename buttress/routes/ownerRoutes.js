import express from "express";
import {
  getOwner,
  addOwner,
  updateOwner,
  deleteOwner,
} from "../controllers/OwnerController.js";

const router = express.Router();

// fetch all hotels
router.route("/").get(getOwner);

router.route("/add").post(addOwner);

router.route("/update").put(updateOwner);

router.route("/remove").delete(deleteOwner);

export default router;
