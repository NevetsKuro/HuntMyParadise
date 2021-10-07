/** @format */

import mongoose from "mongoose";

const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    information: {
      type: String,
    },
    geocode: {
      type: Array,
    },
    amenities: {
      type: Array,
    },
    location: {
      type: String,
    },
    hotelImage: {
      type: String,
    },
    rating: {
      type: Number,
    },
    stars: {
      type: Number,
    },
    totalRooms: {
      type: Number,
    },
    allottedRooms: {
      type: Number,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
