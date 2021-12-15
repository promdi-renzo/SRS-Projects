const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.send({ tasks });
};

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  res.send({ task });
};

const addTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.send({ task });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body);
  res.send({ task });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  res.send({ task });
};

module.exports = {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
