import taskService from "../services/task.service.js";

const getAllTask = async (req, res) => {
  const tasks = await taskService.getAllTask();
  res.send({ tasks });
};

const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await taskService.getTaskById(id);
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

export { getAllTask, getTask, addTask, updateTask, deleteTask };
