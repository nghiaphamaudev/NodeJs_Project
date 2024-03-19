const express = require("express");
const MoviesController = require("./../controller/moviesController");

const route = express.Router();

route
  .route("/")
  .get(MoviesController.getAllMovies)
  .post(MoviesController.createMovie);

route
  .route("/:id")
  .get(MoviesController.getMovieDetail)
  .patch(MoviesController.updateMovie)
  .delete(MoviesController.deleteMovie);

module.exports = route;
