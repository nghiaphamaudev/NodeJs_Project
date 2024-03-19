const express = require("express");
const GenreController = require("./../controller/genresController");

const route = express.Router();

route
  .route("/")
  .get(GenreController.getAllGenres)
  .post(GenreController.creatGenre);

route
  .route("/:id")
  .get(GenreController.getGenreDetail)
  .patch(GenreController.updateGenre)
  .delete(GenreController.deleteGenre);

module.exports = route;
