import express from "express";
import ENV from "./app/environment/environment.js";
import connectDB from "./app/db/connect.js";
import bodyParser from "body-parser";
import userRoute from "./app/routes/user.routes.js";
import productRoute from "./app/routes/product.routes.js";

const app = express();

// server initialization

app.use(bodyParser.json());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

const start = () => {
  connectDB(ENV.db).then(() => {
    console.log("Connected to Database");
    app.listen(ENV.port, () => {
      console.log(`Server started on ${ENV.port}`);
    });
  });
};

start();
