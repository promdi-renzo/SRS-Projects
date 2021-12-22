import mongoose from "mongoose";
import CONST from "../constants/index.js";

const GradeSchema = mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.activity,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  grade: {
    type: Number,
    default: 0.0,
  },
});

export default mongoose.model(CONST.model.grade, GradeSchema);
