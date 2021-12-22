import gradeService from "../services/grade.service.js";

const getAllGrade = async (req, res) => {
  const grades = await gradeService.getAllGrade();
  res.send({ grades });
};

const getGradeById = async (req, res) => {
  const { id } = req.params;
  const grade = await gradeService.getGradeById(id);
  res.send({ grade });
};

const addGrade = async (req, res) => {
  const grade = await gradeService.addGrade(req.body);
  res.send({ grade });
};

const updateGrade = async (req, res) => {
  const { id } = req.params;
  const grade = await gradeService.updateGrade(id, req.body);
  res.send({ grade });
};

const deleteGradeById = async (req, res) => {
  const { id } = req.params;
  const grade = await gradeService.deleteGradeById(id);
  res.send({ grade });
};

export { getAllGrade, getGradeById, addGrade, updateGrade, deleteGradeById };
