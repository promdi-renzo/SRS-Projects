const mongoose = require("mongoose");
const CONST = require("../../constants/index");

const ActivitySchema = mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  name: {
    type: String,
    require: true,
    unique: true,
  },
  filePath: {
    type: String,
    default: "",
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(CONST.model.activity, ActivitySchema);
