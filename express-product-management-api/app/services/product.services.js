const Product = require("../models/product.model");

const getAllProduct = () => {
  return Product.find();
};

const getProductById = (id) => {
  return Product.findById({ _id: id });
};

const addProduct = (body) => {
  return Product.create(body);
};

const updateProduct = (id, body) => {
  return Product.findByIdAndUpdate({ _id: id }, body);
};

const deleteProductById = (id) => {
  return Product.findByIdAndDelete({ _id: id });
};

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
};
