import messageService from "../services/message.service.js";

const getAllMessage = async (req, res) => {
  const result = await messageService.getAll();
  res.send({ result });
};

const getMessageById = async (req, res) => {
  const { id } = req.params;
  const result = await messageService.getById(id);
  res.send({ result });
};

const addMessage = async (req, res) => {
  const result = await messageService.add(req.body);
  res.send({ result });
};

const updateMessage = async (req, res) => {
  const { id } = req.params;
  const result = await messageService.update(id, req.body);
  res.send({ result });
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  const result = await messageService.deleteById(id);
  res.send({ result });
};

export {
  getAllMessage,
  getMessageById,
  addMessage,
  updateMessage,
  deleteMessage,
};
