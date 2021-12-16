const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

const authUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  let msg;

  user
    ? (await bcrypt.compare(password, user.password))
      ? (msg = user.password)
      : (msg = "wrong pass")
    : (msg = "not found");

  res.send({ msg: msg });
};

module.exports = { authUser };
