const mongoose = require("mongoose");
const CONST = require("../constants/index");

const GradeSchema = mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.activity,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  grade: {
    type: Number,
    default: 0.0,
  },
});

module.exports = mongoose.model(CONST.model.grade, GradeSchema);
