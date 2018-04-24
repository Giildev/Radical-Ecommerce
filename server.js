const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes.js");

//*** Database Connection ***//
const { urlDB } = require("./database/database");
mongoose.connect(urlDB);

//*** Settings ***//
const port = process.env.PORT || 4000;
// app.set("containers", path.join(__dirname, "./client/src/containers/"));
// app.set("view engine", "jsx");

//*** Middleware ***//
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//*** Routes ***//
//const authRoutes  = express.Router();
const authRoutes = require("./routes.js");
app.use("/routes", authRoutes);

app.get("/api/hello", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({ object: "Hello from Node.js" });
});

app.post("/api/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin: *");
  res.header("Access-Control-Allow-Credentials: true");
  res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  res.send("Sign up Success");
});

//*** Start Server ***/
app.listen(port, () => console.log(`Listening on port ${port}`));
