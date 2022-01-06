import Message from "../models/message.model.js";

const getAll = async () => {
  const result = await Message.find({});
  console.log(result);
  return result;
};

const getById = async (id) => {
  return await Message.findById({ _id: id });
};

const add = async (body) => {
  return await Message.create(body);
};

const update = async (id, body) => {
  return await Message.findByIdAndUpdate({ _id: id }, body, { new: true });
};

const deleteById = async (id) => {
  return await Message.findByIdAndDelete({ _id: id });
};

export default { getAll, getById, add, update, deleteById };
