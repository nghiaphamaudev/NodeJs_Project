const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
