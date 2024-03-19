const Movie = require("./../models/movieModel");

// GET /movies
exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate(["category", "genres"]);
    res.status(200).json({
      message: "Get All Movies Done",
      data: movies,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// GET /movies/:id
exports.getMovieDetail = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .populate("category")
      .populate("genres");
    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }
    res.status(200).json({
      message: "Get Movie Detail Done",
      data: movie,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// POST /movies
exports.createMovie = async (req, res, next) => {
  // req.body
  // const newMovie = new Movie(req.body);
  const saveMovie = await Movie.create(req.body);
  res.status(201).json({
    message: "Create Movie Successfull",
    data: saveMovie,
  });
};
// PUT /movies/:id
exports.updateMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }
    const updateMovie = await Movie.findById(req.params.id);
    res.status(200).json({
      message: "Update Movie Successfull",
      data: updateMovie,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// DELETE /movies/:id
exports.deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({
        message: "Movie Not Found",
      });
    }
    res.status(200).json({
      message: "Delete Movie Done",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
