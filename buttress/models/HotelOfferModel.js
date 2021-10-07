/** @format */

import mongoose from "mongoose";

const offerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
      required: true,
    },
    discountRate: {
      type: String,
      required: true,
    },
    validStartDate: {
      type: Date,
      required: true,
    },
    validEndDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Offer = mongoose.model("Offer", offerSchema);

export default Offer;
