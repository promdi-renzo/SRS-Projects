const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoute = require("./app/routes/task.route");
const connectDB = require("./app/db/index");
const ENV = require("./app/environment/index");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

// routes
app.use("/api/v1/task", taskRoute);

const start = async () => {
  await connectDB(ENV.mongo_con)
    .then(() => {
      console.log("Connected to DB");
      app.listen(ENV.port, () => {
        console.log(`Server start on ${ENV.port}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

start();
