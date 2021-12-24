import { Schema, model } from "mongoose";
import CONST from "../constants/index.js";

const schema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: CONST.model.USER,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: CONST.model.PRODUCT,
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

export default model(CONST.model.CART, schema);
