import asyncHandler from "express-async-handler";
import Hotel from "../models/hotelModel.js";

const getHotels = asyncHandler(async (req, res) => {
  const hotel = await Hotel.find({});
  return res.status(200).json(hotel);
});

const addHotels = asyncHandler(async (req, res) => {
  const hotel = await Hotel.create(req.body);
  return res.status(200).json(hotel);
});

const updateHotels = asyncHandler(async (req, res) => {
  const hid = req.body.id;
  delete req.body.id;
  await Hotel.findByIdAndUpdate({ _id: hid }, { $set: req.body });

  const hotel = await Hotel.findOne({ _id: hid });
  return res.status(200).json(hotel);
});

const deleteHotels = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.json({ message: "Field Hotel id is required" });
  }
  const hotel = await Hotel.findOneAndDelete({ _id: req.body.id });
  return res.status(200).json(hotel);
});

export { getHotels, addHotels, updateHotels, deleteHotels };
