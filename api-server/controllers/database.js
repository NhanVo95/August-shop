const mongoose = require("mongoose");
const pwd = require("./authentication");
const debugDatabase = require("debug")("api:database");

var today = new Date();

// Connection URL. This is where your mongodb server is running.
// var url = "mongodb://" + username + ":" + password + "@database:27017/pmoData?authMechanism=DEFAULT";
const url = process.env.DATABASE_URL;

// var url =
//     "mongodb+srv://thanhnhan140395:JvEPT7qjY2sSScHz@augusthouse.lwyospy.mongodb.net/pmoData?authMechanism=DEFAULT";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// create an schema
const usersModel = require("../model/users");
const usersInfoModel = require("../model/usersInfo");

function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

module.exports.connect = async function () {
  try {
    await mongoose.connect(url, options);
    debugDatabase("Connection to database server was successful...");
  } catch (error) {
    debugDatabase(error);
  }
};
