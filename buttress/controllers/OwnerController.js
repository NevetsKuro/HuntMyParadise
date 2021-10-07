import asyncHandler from "express-async-handler";
import Owner from "../models/ownerModel.js";

const getOwner = asyncHandler(async (req, res) => {
  const hotel = await Owner.find({});
  return res.status(200).json(hotel);
});

const addOwner = asyncHandler(async (req, res) => {
  const hotel = await Owner.create(req.body);
  return res.status(200).json(hotel);
});

const updateOwner = asyncHandler(async (req, res) => {
  const hid = req.body.id;
  delete req.body.id;
  await Owner.findByIdAndUpdate({ _id: hid }, { $set: req.body });

  const hotel = await Owner.findOne({ _id: hid });
  return res.status(200).json(hotel);
});

const deleteOwner = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.json({ message: "Field Hotel id is required" });
  }
  const hotel = await Owner.findOneAndDelete({ _id: req.body.id });
  return res.status(200).json(hotel);
});

export { getOwner, addOwner, updateOwner, deleteOwner };
