import mongoose from "mongoose";

const AuctionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Auction ||
  mongoose.model("Auction", AuctionSchema);
