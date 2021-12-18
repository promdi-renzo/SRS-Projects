const productService = require("../services/product.services");

const getAllProduct = async (req, res) => {
  const products = await productService.getAllProduct();
  res.send({ products });
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);
  res.send({ product });
};

const addProduct = async (req, res) => {
  const product = await productService.addProduct(req.body);
  res.send({ product });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productService.updateProduct(id, req.body);
  res.send({ product });
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.deleteProductById(id);
  res.send({ product });
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
};
