import express from "express";
import cors from "cors";
import taskRoute from "./app/routes/task.route.js";
import connectDB from "./app/db/index.js";
import ENV from "./app/environment/index.js";

const app = express();
app.use(cors());
app.use(express.json());

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
