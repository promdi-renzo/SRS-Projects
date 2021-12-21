import mongoose from "mongoose";
import CONST from "../constants/index.js";

const ActivitySchema = mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  filePath: {
    type: String,
    default: "",
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(CONST.model.activity, ActivitySchema);
