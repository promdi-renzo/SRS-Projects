const userService = require("../services/user.service");
const CONST = require("../../constants/index");

const getAllUser = async (req, res) => {
  const users = await userService.getAllUser();
  res.send({ users });
};

const getUserById = async (req, res) => {
  const user = await userService.getUserById();
  res.send({ user });
};

const addUser = async (req, res) => {
  const { role = CONST.role.student } = req.query;
  const user = await userService.addUser(req.body, role);
  res.send({ user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.updateUser(id, req.body);
  res.send({ user });
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const users = await userService.deleteUserById(id);
  res.send({ users });
};

module.exports = {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
};
