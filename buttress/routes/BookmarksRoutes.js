import express from "express";
import {
  getBookmark,
  addBookmark,
  updateBookmark,
  deleteBookmark,
} from "../controllers/BookmarkController.js";

const router = express.Router();

// fetch all hotels
router.route("/").get(getBookmark);

router.route("/add").post(addBookmark);

router.route("/update").put(updateBookmark);

router.route("/remove").delete(deleteBookmark);

export default router;
