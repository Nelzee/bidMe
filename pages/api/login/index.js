import dbConnect from "../../../utils/mongo";
import User from "../../../models/User";

const Handler = async (req, res) => {
  await dbConnect();

  const {
    credentials: { email, password },
  } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phonenumber: user.phonenumber || "",
      idNumber: user.idNumber || "",
    });
  } else {
    res.status(401).res.json({
      error: "user not found",
    });
    throw new Error("Invalid Email or Password");
  }
};

export default Handler;
