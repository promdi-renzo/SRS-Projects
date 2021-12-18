const mongoose = require("mongoose");
const CONST = require("../constants/index");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model(CONST.task, TaskSchema);
