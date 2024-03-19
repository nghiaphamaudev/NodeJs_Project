const categoriesRouter = require("./categoriesRoute");
const genresRouter = require("./genreRoute");
const moviesRouter = require("./moviesRoute");

const route = (app) => {
  app.get("/", (req, res) => {
    res.send("Home");
  });

  app.use("/categories", categoriesRouter);
  app.use("/genres", genresRouter);
  app.use("movies", moviesRouter);
};

module.exports = route;
