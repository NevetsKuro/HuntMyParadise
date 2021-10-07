import asyncHandler from "express-async-handler";
import Bookmark from "../models/BookmarksModel.js";

const getBookmark = asyncHandler(async (req, res) => {
  const hotel = await Bookmark.find({});
  return res.status(200).json(hotel);
});

const addBookmark = asyncHandler(async (req, res) => {
  const hotel = await Bookmark.create(req.body);
  return res.status(200).json(hotel);
});

const updateBookmark = asyncHandler(async (req, res) => {
  const hid = req.body.id;
  delete req.body.id;
  await Bookmark.findByIdAndUpdate({ _id: hid }, { $set: req.body });

  const hotel = await Bookmark.findOne({ _id: hid });
  return res.status(200).json(hotel);
});

const deleteBookmark = asyncHandler(async (req, res) => {
  if (!req.body.id) {
    res.json({ message: "Field Hotel id is required" });
  }
  const hotel = await Bookmark.findOneAndDelete({ _id: req.body.id });
  return res.status(200).json(hotel);
});

export { getBookmark, addBookmark, updateBookmark, deleteBookmark };
