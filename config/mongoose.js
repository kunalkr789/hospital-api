const mongoose = require("mongoose");
const config = require("config");

mongoose.connect(config.DBHost, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting MongoDB"));

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
