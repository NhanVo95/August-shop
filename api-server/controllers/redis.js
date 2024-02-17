// import { createClient } from "redis";
var debugRedis = require("debug")("api:redis");
const redis = require("redis");

const client = redis.createClient({
  url: "redis://admin:s86Pr4gH3EJi@redis:6379",
});

client.on("error", (err) => debugRedis("Redis Client Error", err));

module.exports.connectRedis = async function () {
  try {
    await client.connect();

    debugRedis("Redis connected");
  } catch (error) {
    debugRedis(error);
  }
};

module.exports.storeRedis = async function (id, data) {
  delete data.checked;

  var result = await client.hSet("user-session:" + id, data);

  client.expire("user-session:", 24 * 60 * 60);
};

module.exports.retrieveRedis = async function (id) {
  var filter = "user-session:" + id;
  let userSession = await client.hGetAll(filter);

  return userSession;

  // return JSON.stringify(userSession, null, 2);
};
