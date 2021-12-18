const mongoose = require("mongoose");
const CONST = require("../constants/index");

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

module.exports = mongoose.model(CONST.product, ProductSchema);
