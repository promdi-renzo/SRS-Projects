const express = require("express");
const ENV = require("./app/environment/environment");
const connectDB = require("./app/db/connect");
const bodyParser = require("body-parser");

const app = express();
const userRoute = require("./app/routes/user.routes");
const productRoute = require("./app/routes/product.routes");

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
