import mongoose from "mongoose";
import CONST from "../constants/index.js";

const ProductSchema = mongoose.Schema({
  imgPath: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0.0,
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.user,
  },
});

export default mongoose.model(CONST.product, ProductSchema);
