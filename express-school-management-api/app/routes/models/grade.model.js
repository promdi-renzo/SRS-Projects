const mongoose = require("mongoose");
const CONST = require("../../constants/index");

const GradeSchema = mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.activty,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.student,
  },
  grade: {
    type: Number,
    default: 0.0,
  },
});

module.exports = mongoose.model(CONST.model.grade, GradeSchema);
