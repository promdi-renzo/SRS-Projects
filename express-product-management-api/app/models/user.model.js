import mongoose from "mongoose";
import CONST from "../constants/index.js";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model(CONST.user, UserSchema);
