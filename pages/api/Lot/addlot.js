import path from "path";
import multer from "multer";
import dbConnect from "../../../utils/mongo";
import nc from "next-connect";
import onError from "../../../middleware/errorMiddleware";

const Handler = nc(onError);

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../../../../public/images");
  },
  filename: (req, file, callback) => {
    callback(
      null,
      file.originalname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

let uploadFile = upload.single("file");
Handler.use(uploadFile);
Handler = async (req, res) => {
  await dbConnect();

  console.log("req", req.file);
  console.log("body", req.body);

  res.status(200).send("Upload success");
};

export default Handler;
