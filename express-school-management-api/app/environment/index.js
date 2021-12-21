import dotenv from "dotenv";
dotenv.config();

const ENV = {
  port: process.env.PORT || 9000,
  mongo_con: process.env.MONGO_CON || "mongodb://localhost/main",
  hash_salt: Number(process.env.HASH_SALT) || 10,
};

export default ENV;
