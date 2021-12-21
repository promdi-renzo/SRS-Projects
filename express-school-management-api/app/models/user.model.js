import mongoose from "mongoose";
import CONST from "../constants/index.js";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: CONST.role.student,
  },
});

export default mongoose.model(CONST.model.user, UserSchema);
