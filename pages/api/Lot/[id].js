import dbConnect from "../../../utils/mongo";
import Lot from "../../../models/Lots";

const handler = async (req, res) => {
  await dbConnect();

  const {
    query: { id },
  } = req;

  const data = await Lot.findById(id);

  res.json(data);
};

export default handler;
