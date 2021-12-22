import mongoose from "mongoose";
import CONST from "../constants/index.js";

const AnnouncementSchema = mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    default: "",
  },
});

export default mongoose.model(CONST.model.announcement, AnnouncementSchema);
