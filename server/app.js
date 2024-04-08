const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRoutes = require("./routes/users-routes");
const postsRoutes = require("./routes/posts-routes");

const app = express();

app.use(bodyParser.json());

app.use(cors()); // solve CORS

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);

app.use((req, res, next) => {
  throw new Error("Could not find this route!");
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An Unknown Error Occurred." });
});


const user = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const name = process.env.MONGODB_DATABASE;
const apiPort = 5000;

const mongoStr = `mongodb+srv://${user}:${password}@leco-cluster.lzlo6mt.mongodb.net/${name}?retryWrites=true&w=majority&appName=LECO-Cluster`;

mongoose
  .connect(mongoStr)
  .then(() => {
    console.log("Connected to database!");
    app.listen(apiPort, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.log("Connection failed!");
    throw err;
  });
