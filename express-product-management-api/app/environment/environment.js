require("dotenv").config();

const ENV_VAR = {
  port: process.env.PORT || 9000,
  db: process.env.MONGO_CON || "mongodb://localhost/user-management",
  secret: process.env.SECRET || "secret",
  hash_salt: Number(process.env.HASH_SALT) || 10,
  jwt_key: process.env.JWT_KEY || jwt,
};

module.exports = ENV_VAR;
