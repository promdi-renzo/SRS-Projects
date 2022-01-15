import Task from "../models/task.model.js";

const getAll = async () => {
  const data = await Task.find().select("content completed");
  return { status: 200, message: "Successfully get all task", data };
};

const getById = async (id) => {
  const data = await Task.findOne({ _id: id });
  if (!data) return { status: 200, message: "Task does not exist" };
  return { status: 200, message: "Successfully get all task", data };
};

const add = async (body) => {
  const data = await Task.create(body);
  return { status: 200, message: "Successfully created task", data };
};

const update = async (id, body) => {
  return await Task.findByIdAndUpdate({ _id: id }, body);
};

const deleteById = async (id) => {
  const data = await Task.findByIdAndDelete({ _id: id }, { new: true });
  if (!data) return { status: 200, message: "Task does not exist" };
  return { status: 200, message: "Successfully deleted task", data };
};

export default { getAll, getById, add, update, deleteById };
