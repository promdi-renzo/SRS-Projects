import mongoose from "mongoose";
import CONST from "../constants/index.js";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(CONST.task, TaskSchema);
