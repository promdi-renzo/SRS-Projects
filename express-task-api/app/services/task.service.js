const Task = require("../models/task.model");

const getAllTask = async () => {
  const tasks = await Task.find({});
  return tasks;
};

const getTask = async (id) => {
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

module.exports = {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
