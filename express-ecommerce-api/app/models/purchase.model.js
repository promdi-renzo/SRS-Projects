import { Schema, model } from "mongoose";
import CONST from "../constants/index.js";

const schema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: CONST.model.USER,
    },
    purchases: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: CONST.model.PRODUCT,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: { createdAt: "dateCreated", updatedAt: "dateUpdated" },
  }
);

export default model(CONST.model.PURCHASE, schema);
