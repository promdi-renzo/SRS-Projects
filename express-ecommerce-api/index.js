import express from "express";
import connectDB from "./app/db/index.js";
import ENV from "./app/environment/index.js";
import userRoute from "./app/routes/user.route.js";

const app = express();

app.use("/api/v1/user", userRoute);

const start = () => {
  connectDB(ENV.MONGO_CON).then(() => {
    console.log("Connect to DB");
    app.listen(ENV.PORT, function () {
      console.log(`Server started on ${ENV.PORT}`);
    });
  });
};

start();
