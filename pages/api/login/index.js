import dbConnect from "../../../utils/mongo";
import User from "../../../models/User";
import { useDispatch } from "react-redux";
import { addbid } from "../../../redux/bidsSlice";

const Handler = async (req, res) => {
  await dbConnect();

  const {
    credentials: { email, password },
  } = req.body;

  // const user = await User.findOne({ email });

  // if (user && (await user.matchPassword(password))) {
  //   res.json({
  //     _id: user._id,
  //     email: user.email,
  //   });
  // } else {
  //   res.status(401);
  //   throw new Error("Invalid Email or Password");
  // }

  res.json({ name: "nelson", last: "ngwenya" });
};

export default Handler;
