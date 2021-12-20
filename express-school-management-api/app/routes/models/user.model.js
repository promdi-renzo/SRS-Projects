const mongoose = require("mongoose");
const CONST = require("../../constants/index");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    default: CONST.role.student,
  },
});

module.exports = mongoose.model(CONST.model.user, UserSchema);
