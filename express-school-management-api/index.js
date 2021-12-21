import express from "express";
import bodyParser from "body-parser";
import ENV from "./app/environment/index.js";
import connectDB from "./app/db/connect.js";
import userRoute from "./app/routes/user.route.js";
import activityRoute from "./app/routes/activity.route.js";
// const activityRoute = require();
// const announcementRoute = require("./app/routes/announcement.route");
// const assignmentRoute = require("./app/routes/assignment.route");
// const gradeRoute = require("./app/routes/grade.route");

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/activity", activityRoute);
// app.use("/api/v1/announcement", announcementRoute);
// app.use("/api/v1/assignment", assignmentRoute);
// app.use("/api/v1/grade", gradeRoute);

const start = () => {
  connectDB(ENV.mongo_con).then(() => {
    console.log("Connected to DB");
    app.listen(ENV.port, () => {
      console.log(`Server started on port ${ENV.port}`);
    });
  });
};

start();
