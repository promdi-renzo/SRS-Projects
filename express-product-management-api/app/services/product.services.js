import Product from "../models/product.model.js";

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

export default {
  getAllProduct,
  getProductById,
  addProduct,
  updateProduct,
  deleteProductById,
};
