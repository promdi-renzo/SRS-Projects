import { Router } from "express";
import auth from "../middlewares/auth.js";
import {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
} from "../controllers/product.controller.js";
const router = Router();
router.use(auth.authenticate);
router.route("/").get(getAllProduct).post(addProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProductById);

export default router;
