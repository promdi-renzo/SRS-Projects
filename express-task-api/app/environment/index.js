import dotenv from "dotenv";

dotenv.config();
const ENV = {
  port: process.env.PORT || 9000,
  mongo_con: process.env.MONGO_CON || "mongodb://localhost/main",
};

export default ENV;
