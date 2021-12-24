import Task from "../models/task.model.js";

const getAllTask = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const getTaskById = async (id) => {
  const task = await Task.findOne({ _id: id });
  return task;
};

const addTask = async (body) => {
  const task = await Task.create(body);
  return task;
};

const updateTask = async (id, body) => {
  const task = await Task.findByIdAndUpdate({ _id: id }, body);
  return task;
};

const deleteTask = async (id) => {
  const task = await Task.findOneAndDelete({ _id: id });
  return task;
};

export default { getAllTask, getTaskById, addTask, updateTask, deleteTask };
