import asyncHandler from "express-async-handler";
import HotelOffer from "../models/HotelOfferModel.js";

const getHotelOffer = asyncHandler(async (req, res) => {
  const hotel = await HotelOffer.find({});
  return res.status(200).json(hotel);
});

const addHotelOffer = asyncHandler(async (req, res) => {
  const hotel = await HotelOffer.create(req.body);
  return res.status(200).json(hotel);
});

const updateHotelOffer = asyncHandler(async (req, res) => {
  const hid = req.body.id;
  delete req.body.id;
  await HotelOffer.findByIdAndUpdate({ _id: hid }, { $set: req.body });

  const hotel = await HotelOffer.findOne({ _id: hid });
  return res.status(200).json(hotel);
});

const deleteHotelOffer = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.json({ message: "Field Hotel id is required" });
  }
  const hotel = await HotelOffer.findOneAndDelete({ _id: req.body.id });
  return res.status(200).json(hotel);
});

export { getHotelOffer, addHotelOffer, updateHotelOffer, deleteHotelOffer };
