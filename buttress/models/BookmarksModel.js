/** @format */

import mongoose from "mongoose";

const bookmarksSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    hotelId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    allottedRooms: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Bookmarks = mongoose.model("Bookmarks", bookmarksSchema);

export default Bookmarks;
