const mongoose = require("mongoose");
const CONST = require("../constants/index");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(CONST.user, UserSchema);
