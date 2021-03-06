const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const router = express.Router();
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.get("/", (req, res) => {
  res.send("Hello world!");
})

app.post("/createUser", (req, res) => {
  const userData = req.body;
  console.log("user was successfully created: ", userData);

  if (userData.password === userData.confirmation) {
    res.redirect("/");
  }
});

// Serve the files on port 3000.
app.listen(port, () => {
  console.log(`server started on port ${port}!\n`);
});
