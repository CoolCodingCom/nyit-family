const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRoutes = require("./routes/users-routes");
const postsRoutes = require("./routes/posts-routes");
const authRoutes = require("./routes/auth-routes");
const passport = require("./util/passportUtil");
const keys = require("./config/keys");


const app = express();

app.use(bodyParser.json());

app.use(cors()); // solve CORS

passport(app);

app.use("/api/auth", authRoutes);

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


const user = keys.mongoDB.MONGODB_USER;
const password = keys.mongoDB.MONGODB_PASSWORD;
const name = keys.mongoDB.MONGODB_DATABASE;

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
