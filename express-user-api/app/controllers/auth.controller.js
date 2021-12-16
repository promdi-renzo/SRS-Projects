const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.SECRET || "secret";

const authUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  let msg;

  user
    ? (await bcrypt.compare(password, user.password))
      ? (msg = jwt.sign({ username: username }, "secret", {
          expiresIn: "1800s",
        }))
      : (msg = "wrong pass")
    : (msg = "not found");

  res.send({ msg: msg });
};

module.exports = { authUser };
