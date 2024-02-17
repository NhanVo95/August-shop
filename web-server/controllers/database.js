const mongoose = require("mongoose");
const pwd = require("./authentication");
const debugDatabase = require("debug")("pmo:database");

var today = new Date();

// Connection URL. This is where your mongodb server is running.
// var url = "mongodb://" + username + ":" + password + "@database:27017/pmoData?authMechanism=DEFAULT";
const url = process.env.DATABASE_URL;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// create an schema
const usersModel = require("../model/users");
const usersInfoModel = require("../model/usersInfo");

module.exports.connect = async function () {
  try {
    await mongoose.connect(url, options);
    debugDatabase("Connection to database server was successful...");
  } catch (error) {
    debugDatabase(error);
  }
};

//SECTION - register new account
module.exports.register = async function (
  name,
  email,
  pass,
  permission,
  fee,
  phone,
  unitName,
  role,
  createdBy
) {
  const filter = {
    email: email,
  };

  try {
    var dataTemp = await usersModel.find(filter);
  } catch (error) {
    debugDatabase(error);
  }

  if (dataTemp.length == 0) {
    var password;
    if (pass == "") {
      password = pwd.saltHashPassword("123456");
    } else {
      password = pwd.saltHashPassword(pass);
    }

    var userInfo = new usersInfoModel({
      _id: new mongoose.Types.ObjectId(),
      email: email,
      phone: phone,
      unitName: unitName,
      role: role,
      createdBy: createdBy,
    });

    try {
      await userInfo.save();

      var user = new usersModel({
        name: name,
        email: email,
        password: password.passwordHash,
        salt: password.salt,
        permission: permission,
        fee: fee,
        userID: userInfo._id,
      });

      await user.save();

      debugDatabase("User " + name + " successfully saved.");
    } catch (error) {
      debugDatabase(error);
    }
  } else {
    var data = {
      $set: {
        name: name,
        permission: permission,
        fee: fee,
      },
    };

    try {
      await usersModel.findOneAndUpdate(filter, data);

      debugDatabase("User " + name + " successfully updated.");
    } catch (error) {
      debugDatabase(error);
    }
  }
};
//!SECTION - register new account
