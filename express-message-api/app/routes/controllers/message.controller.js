import messageService from "../services/message.service.js";

const getAllMessage = async (req, res) => {
  const messages = await messageService.getAll();
  res.send({ messages });
};

const getMessageById = async (req, res) => {
  const { id } = req.params;
  const message = await messageService.getById(id);
  res.send({ message });
};

const addMessage = async (req, res) => {
  console.log(req.body);
  const message = await messageService.add(req.body);
  res.send({ message });
};

const updateMessage = async (req, res) => {
  const { id } = req.params;
  const message = await messageService.update(id, req.body);
  res.send({ message });
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  const message = await messageService.deleteById(id);
  res.send({ message });
};

export {
  getAllMessage,
  getMessageById,
  addMessage,
  updateMessage,
  deleteMessage,
};
