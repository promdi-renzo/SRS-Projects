import assignmentModel from "../models/assignment.model.js";

const getAllAssignment = async () => {
  const assignments = await assignmentModel.find();
  return assignments;
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

export default {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  updateAssignment,
  deleteAssignmentById,
};
