import userService from "../services/user.services.js";

const authUser = async (req, res) => {
  const token = await userService.authUser(req.body);
  if (!token) {
    res.send({ msg: "invalid credentials" });
  } else {
    res.send({ token: token });
  }
};

const getAllUser = async (req, res) => {
  const users = await userService.getAllUser();
  res.send({ users });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.send({ user });
};

const addUser = async (req, res) => {
  const user = await userService.addUser(req.body);
  res.send({ user });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await userService.updateUser(id, req.body);
  res.send({ user });
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.deleteUserById(id);
  res.send({ user });
};

export {
  getAllUser,
  getUserById,
  addUser,
  updateUser,
  deleteUserById,
  authUser,
};
