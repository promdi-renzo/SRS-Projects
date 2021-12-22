import announcementService from "../services/announcement.service.js";

const getAllAnnouncement = async (req, res) => {
  const announcements = await announcementService.getAllAnnouncement();
  res.send({ announcements });
};

const getAnnouncementById = async (req, res) => {
  const { id } = req.params;
  const announcement = await announcementService.getAnnouncementById(id);
  res.send({ announcement });
};

const addAnnouncement = async (req, res) => {
  const announcement = await announcementService.addAnnouncement(req.body);
  res.send({ announcement });
};

const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  const announcement = await announcementService.updateAnnouncement(
    id,
    req.body
  );
  res.send({ announcement });
};

const deleteAnnouncementById = async (req, res) => {
  const { id } = req.params;
  const announcement = await announcementService.deleteAnnouncementById(id);
  res.send({ announcement });
};

export {
  getAllAnnouncement,
  getAnnouncementById,
  addAnnouncement,
  updateAnnouncement,
  deleteAnnouncementById,
};
