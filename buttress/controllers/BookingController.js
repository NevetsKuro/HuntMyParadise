import asyncHandler from "express-async-handler";
import Booking from "../models/BookingModel.js";

const getBooking = asyncHandler(async (req, res) => {
  const hotel = await Booking.find({});
  return res.status(200).json(hotel);
});

const addBooking = asyncHandler(async (req, res) => {
  const hotel = await Booking.create(req.body);
  return res.status(200).json(hotel);
});

const updateBooking = asyncHandler(async (req, res) => {
  const hid = req.body.id;
  delete req.body.id;
  await Booking.findByIdAndUpdate({ _id: hid }, { $set: req.body });

  const hotel = await Booking.findOne({ _id: hid });
  return res.status(200).json(hotel);
});

const deleteBooking = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.json({ message: "Field Hotel id is required" });
  }
  const hotel = await Booking.findOneAndDelete({ _id: req.body.id });
  return res.status(200).json(hotel);
});

export { getBooking, addBooking, updateBooking, deleteBooking };
