import mongoose from "mongoose";
import CONST from "../../constants/index.js";

const schema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model(CONST.MODEL.TASK, schema);
