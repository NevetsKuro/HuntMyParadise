import express from "express";
const router = express.Router();

// authUser,
// registerUser,
import { getUsers } from "../controllers/userController.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/").get(getUsers);

export default router;
