import mongoose from "mongoose";

const LotSchema = new mongoose.Schema(
  {
    auction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auction",
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lot || mongoose.model("Lot", LotSchema);
