const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config({ path: "/config.env" });
const route = require("./routes");

app.use(express.json());
app.use(require("body-parser").urlencoded());

const port = process.env.PORT;
const DB = process.env.DATABASE;

console.log(DB);
const mongooseConnect = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("The connect MongoDb is succesfully");
  } catch (error) {
    console.log(error.message);
  }
};
mongooseConnect(DB);

route(app);
app.listen(port, () => {
  console.log(`The server is connect port ${port}`);
});
