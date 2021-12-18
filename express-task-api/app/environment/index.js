require("dotenv").config();

const ENV = {
  port: process.env.PORT || 9000,
  mongo_con: process.env.MONGO_CON || "mongodb://localhost/main",
};

module.exports = ENV;
