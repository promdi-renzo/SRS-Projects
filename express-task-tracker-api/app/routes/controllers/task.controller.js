import taskService from "../services/task.service.js";
import mongoose from "mongoose";

const getAllTask = async (req, res) => {
  const result = await taskService.getAll();
  res.send(result);
};

const getTaskById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.send({ status: 200, message: "Object ID is not valid" });
    return;
  }
  const result = await taskService.getById(id);
  res.send(result);
};

const addTask = async (req, res) => {
  const result = await taskService.add(req.body);
  res.send(result);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.send({ status: 200, message: "Object ID is not valid" });
    return;
  }
  const result = await taskService.update(id, req.body);
  res.send({ result });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.send({ status: 200, message: "Object ID is not valid" });
    return;
  }
  const result = await taskService.deleteById(id);
  res.send(result);
};

export { getAllTask, getTaskById, addTask, updateTask, deleteTask };
