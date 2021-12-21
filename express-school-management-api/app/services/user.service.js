import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

const getAllUser = async () => {
  const users = await userModel.find();
  return users;
};

const getUserById = async (id) => {
  const user = await userModel.find({ _id: id });
  return user;
};

const addUser = async (body, role) => {
  body.password = await hashPassword(body);
  const addUser = await parseUser(body, role);
  const user = await userModel.create(addUser);
  return user;
};

const updateUser = async (id, body) => {
  body.password = await hashPassword(body);
  const user = await userModel.findByIdAndUpdate({ _id: id }, body);
  return user;
};

const deleteUserById = async (id) => {
  const user = await userModel.findByIdAndDelete({ _id: id });
  return user;
};

const hashPassword = async (body) => {
  return await bcrypt.hash(body.password, 10);
};

const parseUser = async (body, role) => {
  return {
    username: body.username,
    password: body.password,
    role: role,
  };
};

export default { getAllUser, getUserById, addUser, updateUser, deleteUserById };
