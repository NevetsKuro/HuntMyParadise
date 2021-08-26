/* eslint-disable import/extensions */
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password, user.password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    return res
      .status(401)
      .json({ status: 0, message: "Invalid email or Password" });
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ status: 0, message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
    timestamps: new Date(),
    isAdmin: false,
  });

  if (user) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ status: 0, message: "Invalid user data" });
  }
});

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

export { authUser, registerUser, getUsers };
