const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const userRoutes = require("./app/routes/user.routes");
const connectDB = require("./app/db/connect");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }), bodyParser.json());
const PORT = process.env.PORT || 3333;
const MONDO_CON = process.env.MONGO_CON || "mongodb://localhost/user";

app.use("/api/v1/user", userRoutes);

const start = async () => {
  await connectDB(MONDO_CON).then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  });
};

start();
