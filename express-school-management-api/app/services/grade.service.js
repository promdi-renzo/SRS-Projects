import gradeModel from "../models/grade.model.js";

const getAllGrade = async () => {
  const grades = await gradeModel.find();
  return grades;
};

const getGradeById = async (id) => {
  const grade = await gradeModel.find({ _id: id });
  return grade;
};

const addGrade = async (body) => {
  const grade = await gradeModel.create(body);
  return grade;
};

const updateGrade = async (id, body) => {
  const grade = await gradeModel.findByIdAndUpdate({ _id: id }, body);
  return grade;
};

const deleteGradeById = async (id) => {
  const grade = await gradeModel.findByIdAndDelete({ _id: id });
  return grade;
};

export default {
  getAllGrade,
  getGradeById,
  addGrade,
  updateGrade,
  deleteGradeById,
};
