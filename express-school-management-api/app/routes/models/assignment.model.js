const mongoose = require("mongoose");
const CONST = require("../../constants/index");

const AssignmentSchema = mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.activty,
  },
  filePath: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(CONST.model.assignment, AssignmentSchema);
