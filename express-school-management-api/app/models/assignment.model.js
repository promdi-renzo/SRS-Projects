import mongoose from "mongoose";
import CONST from "../constants/index.js";

const AssignmentSchema = mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.activity,
  },
  filePath: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(CONST.model.assignment, AssignmentSchema);
