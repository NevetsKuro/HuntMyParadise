/** @format */

import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    hotelOwner: {
      type: Number,
    },
    hotelList: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
