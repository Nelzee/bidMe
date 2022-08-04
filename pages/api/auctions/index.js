import dbConnect from "../../../utils/mongo";
import Auction from "../../../models/Auction";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  const data = await Auction.find();

  res.json(data);
};

export default handler;
