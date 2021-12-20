const assignmentModel = require("../models/assignment.model");

const getAllAssignment = async () => {
  const assignments = await assignmentModel.find();
  return activities;
};

const getAssignmentById = async (id) => {
  const assignment = await assignmentModel.find({ _id: id });
  return assignment;
};

const addAssignment = async (body) => {
  const assignment = await assignmentModel.create(body);
  return assignment;
};

const updateAssignment = async (id, body) => {
  const assignment = await assignmentModel.findByIdAndUpdate({ _id: id }, body);
  return assignment;
};

const deleteAssignmentById = async (id) => {
  const assignment = await assignmentModel.findByIdAndDelete({ _id: id });
  return assignment;
};

module.exports = {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  updateAssignment,
  deleteAssignmentById,
};
