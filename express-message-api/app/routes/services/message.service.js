import messageModel from "../models/message.model.js";

const getAll = async () => {
  return await messageModel.find();
};

const getById = async (id) => {
  return await messageModel.findById({ _id: id });
};

const add = async (body) => {
  return await messageModel.create(body);
};

const update = async (id, body) => {
  return await messageModel.findByIdAndUpdate({ _id: id }, body, { new: true });
};

const deleteById = async (id) => {
  return await messageModel.findByIdAndDelete({ _id: id });
};

export default { getAll, getById, add, update, deleteById };
