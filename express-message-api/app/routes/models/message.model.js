import mongoose from "mongoose";
import CONST from "../../constants/index.js";

const schema = mongoose.Schema({
  message: {
    type: String,
  },
});

export default mongoose.model(CONST.MODEL.MESSAGE, schema);
