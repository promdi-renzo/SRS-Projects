import mongoose from "mongoose";
import CONST from "../../constants/index.js";

const schema = mongoose.Schema({
  content: {
    type: String,
    default: "",
  },
});

export default mongoose.model(CONST.MODEL.MESSAGE, schema);
