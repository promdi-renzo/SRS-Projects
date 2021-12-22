import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import ENV from "../environment/environment.js";
import jwt from "jsonwebtoken";

const authUser = async (body) => {
  const { username, password } = body;
  const user = await User.findOne({ username: username });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: username }, ENV.jwt_key);
      return token;
    }
  }
};

const getAllUser = () => {
  return User.find();
};

const getUserById = (id) => {
  return User.findById({ _id: id });
};

const addUser = async (body) => {
  body.password = await bcrypt.hash(body.password, ENV.hash_salt);
  return User.create(body);
};

const updateUser = async (id, body) => {
  const { password } = body;
  if (password) {
    body.password = await bcrypt.hash(body.password, ENV.hash_salt);
  }
  return User.findByIdAndUpdate({ _id: id }, body);
};

const deleteUserById = (id) => {
  return User.findByIdAndDelete({ _id: id });
};

export default {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
  authUser,
};
