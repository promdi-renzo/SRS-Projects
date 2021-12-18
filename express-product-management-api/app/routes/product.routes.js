const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
} = require("../controllers/product.controller");

router.use(auth.authenticate);
router.route("/").get(getAllProduct).post(addProduct);
router
  .route("/:id")
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProductById);

module.exports = router;
