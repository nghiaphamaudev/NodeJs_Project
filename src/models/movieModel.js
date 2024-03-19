const mongoose = require("mongoose");
const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
    director: {
      type: String,
    },
    cast: {
      type: String,
    },
    genres: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Genre",
      require: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    runingTime: {
      type: Number,
    },
    language: {
      type: String,
    },
    rated: {
      type: Number,
    },
    trailer: {
      type: String,
    },
    imgBanner: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
