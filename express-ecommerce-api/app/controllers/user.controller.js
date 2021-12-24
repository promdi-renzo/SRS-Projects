import userServices from "../services/user.services.js";

const getAllUser = async (req, res) => {
  const users = await userServices.getAllUser();
  res.send({ users });
};

export { getAllUser };
