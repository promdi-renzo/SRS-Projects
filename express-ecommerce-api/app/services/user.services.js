import User from "../models/user.model.js";

const getAllUser = async () => {
  const users = await User.find({});
  return users;
};

export default { getAllUser };
