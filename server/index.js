require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());

// rest API requirements
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const facebookRoutes = require("./routes/facebookAuth");

app.use("/api", facebookRoutes);

app.get("/", (req, res) => {
  return res.send("Welcome to Easy-social");
});

const port = 5000;

const server = app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT= ${port}`);
});
