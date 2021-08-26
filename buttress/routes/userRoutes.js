import express from "express";
import {
  getUsers,
  registerUser,
  authUser,
} from "../controllers/userController.js";

const router = express.Router();

// login and authenticate users
router.route("/authenticate").post(authUser);

// register new user,
router.route("/").post(registerUser);

// fetch all user
router.route("/").get(getUsers);
// example: router.route("/").post(registerUser).get(protect, admin, getUsers);

export default router;
