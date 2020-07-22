const express = require("express");
const port = 8000;
const db = require("./config/mongoose");

//passport library
const passport = require("passport");
const passportJWT = require("./config/auth");

const app = express();

const bodyParser = require("body-parser");
const config = require("config");
const morgan = require("morgan");

if (config.util.getEnv("NODE_ENV") !== "test") {
  app.use(morgan("combined"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log("Express is running on the port:", port);
});

module.exports = app;
