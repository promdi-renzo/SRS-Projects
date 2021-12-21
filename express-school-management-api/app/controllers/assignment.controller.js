const assignmentService = require("../services/assignment.service");

const getAllAssignment = async (req, res) => {
  const assignments = await assignmentService.getAllAssignment();
  res.send({ assignments });
};

const getAssignmentById = async (req, res) => {
  const { id } = req.params;
  const assignemnt = await assignmentService.getAssignmentById(id);
  res.send({ assignemnt });
};

const addAssignment = async (req, res) => {
  const assignemnt = await assignmentService.addAssignment(req.body);
  res.send({ assignemnt });
};

const updateAssignment = async (req, res) => {
  const { id } = req.params;
  const assignemnt = await assignmentService.updateAssignment(id, req.body);
  res.send({ assignemnt });
};

const deleteAssignmentById = async (req, res) => {
  const { id } = req.params;
  const assignemnt = await assignmentService.deleteAssignmentById(id);
  res.send({ assignemnt });
};

module.exports = {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  updateAssignment,
  deleteAssignmentById,
};
