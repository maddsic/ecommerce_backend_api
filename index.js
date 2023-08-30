const express = require("express");

const app = express();
const mongoose = require("mongoose");

require("dotenv").config();
// console.log(process.env);

const runApp = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION_SECRET)
    .then(() => {
      console.log("DBConnection established Successfully");
      app.listen(process.env.PORT, () => {
        console.log("Server Running Successfully");
      });
    })
    .catch((err) => console.log("Error connecting to Mongoose" + err.message));
};

runApp();
