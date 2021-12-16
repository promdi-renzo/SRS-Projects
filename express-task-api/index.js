const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const tasks = require("./app/routes/tasks");
const connectDB = require("./app/db/connect");

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3333;
const MONGO_CON = process.env.MONGO_CON || "mongodb://localhost/main";

// routes
app.use("/api/v1/task", tasks);

const start = async () => {
  await connectDB(MONGO_CON)
    .then(() => {
      console.log("Connected to DB");
      app.listen(PORT, () => {
        console.log(`Server start on ${PORT}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

start();
