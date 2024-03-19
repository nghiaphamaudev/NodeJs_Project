const express = require("express");
const CategoriesController = require("./../controller/categoriesController");

const route = express.Router();

route
  .route("/")
  .get(CategoriesController.getCategoryDetail)
  .post(CategoriesController.creatCategory);

route
  .route("/:id")
  .get(CategoriesController.getCategoryDetail)
  .patch(CategoriesController.updateCategory)
  .delete(CategoriesController.deleteCategory);

module.exports = route;
