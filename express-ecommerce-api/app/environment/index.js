import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT || 9000,
  MONGO_CON: process.env.MONGO_CON || "mongodb://localhost/ecommerce",
};

export default ENV;
