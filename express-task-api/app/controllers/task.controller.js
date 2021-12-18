const taskService = require("../services/task.service");

const getAllTask = async (req, res) => {
  const tasks = await taskService.getAllTask();
  res.send({ tasks });
};

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.getAllTask(id);
  res.send({ task });
};

const addTask = async (req, res) => {
  const task = await taskService.addTask(req.body);
  res.send({ task });
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.updateTask(id, req.body);
  res.send({ task });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.deleteTask(id);
  res.send({ task });
};

module.exports = {
  getAllTask,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
