import mongoose from "mongoose";
import CONST from "../constants/index.js";

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: CONST.role.CUSTOMER,
    },
  },
  {
    timestamps: { createdAt: "dateCreated", updatedAt: "dateUpdated" },
  }
);

export default mongoose.model(CONST.model.USER, schema);
