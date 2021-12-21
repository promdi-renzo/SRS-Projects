const mongoose = require("mongoose");
const CONST = require("../../constants/index");

const AnnouncementSchema = mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: CONST.model.user,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model(CONST.model.announcement, AnnouncementSchema);
