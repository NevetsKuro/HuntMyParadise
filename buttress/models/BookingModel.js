/** @format */

import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      required: true,
    },
    hotelRoomAllotted: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
