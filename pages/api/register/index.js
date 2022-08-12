import dbConnect from "../../../utils/mongo";
import User from "../../../models/User";

const handler = async (req, res) => {
  await dbConnect();

  const {
    credentials: { email, password },
  } = req.body;

  const data = User.create({ email: email, password: password });

  res.json({ message: "registered" });
};

export default handler;
