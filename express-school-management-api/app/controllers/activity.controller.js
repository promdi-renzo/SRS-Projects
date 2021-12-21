import activityService from "../services/activity.service.js";

const getAllActivity = async (req, res) => {
  const activities = await activityService.getAllActivity();
  res.send({ activities });
};

const getActivityById = async (req, res) => {
  const { id } = req.params;
  const activity = await activityService.getActivityById(id);
  res.send({ activity });
};

const addActivity = async (req, res) => {
  const activity = await activityService.addActivity(req.body);
  res.send({ activity });
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await activityService.updateActivity(id, req.body);
  res.send({ activity });
};

const deleteActivityById = async (req, res) => {
  const { id } = req.params;
  const activity = await activityService.deleteActivityById(id);
  res.send({ activity });
};

export {
  getAllActivity,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivityById,
};
