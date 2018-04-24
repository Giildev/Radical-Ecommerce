const User = require("./database/userSchema.js");
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
  res.header("Access-Control-Allow-Headers: Content-Type");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  if (req.body != null) {
    console.log("Sign up Success");
    const email = req.body.email;
    const password = req.body.password;
    const dbDoc = new User();    
    dbDoc.email = email
    dbDoc.password = password    
    dbDoc.save().then((data) => {console.log(data)});    
  } else {
    res.send(req.error);
  }
});

app.post("/api/login", (req, res) => {
  res.header("Access-Control-Allow-Origin: *");
  res.header("Access-Control-Allow-Credentials: true");
  res.header("Access-Control-Allow-Headers: Content-Type");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  if (res.send(req.body) != null) {
    console.log("Log in Success");
    res.send(req.body);
  } else {
    res.send(req.error);
  }
});

//*** Start Server ***/
app.listen(port, () => console.log(`Listening on port ${port}`));
