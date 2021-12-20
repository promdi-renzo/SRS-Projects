const activityModel = require("../models/activity.model");

const getAllActivity = async () => {
  const activities = await activityModel.find();
  return activities;
};

const getActivityById = async (id) => {
  const activity = await activityModel.find({ _id: id });
  return activity;
};

const addActivity = async (body) => {
  const activity = await activityModel.create(body);
  return activity;
};

const updateActivity = async (id, body) => {
  const activity = await activityModel.findByIdAndUpdate({ _id: id }, body);
  return activity;
};

const deleteActivityById = async (id) => {
  const activity = await activityModel.findByIdAndDelete({ _id: id });
  return activity;
};

module.exports = {
  getAllActivity,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivityById,
};
