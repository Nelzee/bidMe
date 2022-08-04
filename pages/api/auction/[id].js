import dbConnect from "../../../utils/mongo";
import Auction from "../../../models/Auction";

const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  console.log(id, "here");
  const data = await Auction.findById(id);

  res.json(data);
};

export default handler;
