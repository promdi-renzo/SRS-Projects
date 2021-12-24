import { Schema, model } from "mongoose";
import CONST from "../constants/index.js";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    desc: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0.0,
    },
  },
  {
    timestamps: { createdAt: "dateCreated", updatedAt: "dateUpdated" },
  }
);

export default model(CONST.model.PRODUCT, schema);
