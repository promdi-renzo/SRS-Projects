import activityModel from "../models/activity.model.js";

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

export default {
  getAllActivity,
  getActivityById,
  addActivity,
  updateActivity,
  deleteActivityById,
};
