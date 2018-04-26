const User = require("./database/userSchema.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes.js");
const cors = require("cors");
const bcrypt = require("bcrypt-nodejs");

//*** Database Connection ***//
const { urlDB } = require("./database/database");
mongoose.connect(urlDB);

//*** Settings ***//
const port = process.env.PORT || 4000;

//*** Middleware ***//
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//*** Routes ***//
const authRoutes = require("./routes.js");
app.use("/routes", authRoutes);

app.get("/api/hello", (req, res) => {
  res.send({ object: "Hello from Node.js" });
});

//*** Register post ***//
app.post("/api/signup", (req, res) => {
  if (req.body != null) {
    const dbDoc = new User();

    const encrypt = bcrypt.hashSync(req.body.password);

    dbDoc.name = req.body.name;
    dbDoc.lastName = req.body.lastName;
    dbDoc.email = req.body.email;
    dbDoc.phone = req.body.phone;
    dbDoc.password = encrypt;

    dbDoc.save(function(error) {
      if (error) {
        res.send(error);
      } else {
        res.send("Sign up Success!!!");
        console.log("Sign up Success!!!");
      }
    });
  } else {
    res.send(req.error);
  }
});

//*** login post ***//
app.post("/api/login", (req, res) => {
  if (res.send(req.body) != null) {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const query = User.findOne({ email: email });
    query.select("email password");
    query.exec(function(err, user) {
      if (user != null) {
        const decrypt = bcrypt.compareSync(password, user.password);
        if (decrypt == true) {
          console.log("Log in Success");
        } else {
          console.log("Incorrect password!");
        }
      } else {
        console.log("This user doesn't exis");
      }
    });
    //res.send(req.body.email); -> surge error(?)
  } else {
    res.send(req.error);
  }
});

//*** Start Server ***/
app.listen(port, () => console.log(`Listening on port ${port}`));
