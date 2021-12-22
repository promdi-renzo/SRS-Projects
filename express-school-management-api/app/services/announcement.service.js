import announcementModel from "../models/announcement.model.js";

const getAllAnnouncement = async () => {
  const activities = await announcementModel.find();
  return activities;
};

const getAnnouncementById = async (id) => {
  const activity = await announcementModel.find({ _id: id });
  return activity;
};

const addAnnouncement = async (body) => {
  const activity = await announcementModel.create(body);
  return activity;
};

const updateAnnouncement = async (id, body) => {
  const activity = await announcementModel.findByIdAndUpdate({ _id: id }, body);
  return activity;
};

const deleteAnnouncementById = async (id) => {
  const activity = await announcementModel.findByIdAndDelete({ _id: id });
  return activity;
};

export default {
  getAllAnnouncement,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncementById,
};
