const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.EMAIL}:${process.env.PASSWORD}@ruchitlabs.pfxjtvv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((d) => console.log("connected"))
  .catch((err) => console.log("error"));
module.exports = { mongoose };
