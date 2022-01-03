import { Router } from "express";
import {
  getAllMessage,
  getMessageById,
  addMessage,
  updateMessage,
  deleteMessage,
} from "./controllers/message.controller.js";

const router = Router();
router.route("/").get(getAllMessage).post(addMessage);
router
  .route("/:id")
  .get(getMessageById)
  .patch(updateMessage)
  .delete(deleteMessage);

export default router;
