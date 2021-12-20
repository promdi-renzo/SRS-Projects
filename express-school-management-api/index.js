const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./app/db/connect");
const userRoute = require("./app/routes/user.route");
const activityRoute = require("./app/routes/activity.route");
const announcementRoute = require("./app/routes/announcement.route");
const assignmentRoute = require("./app/routes/assignment.route");
const ENV = require("./app/environment/index");

app.use(bodyParser.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/activity", activityRoute);
app.use("/api/v1/announcement", announcementRoute);
app.use("/api/v1/assignment", assignmentRoute);

const start = () => {
  connectDB(ENV.mongo_con).then(() => {
    console.log("Connected to DB");
    app.listen(ENV.port, () => {
      console.log(`Server started on port ${ENV.port}`);
    });
  });
};

start();
