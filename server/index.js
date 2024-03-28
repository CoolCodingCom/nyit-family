const express = require("express");
const mongoose = require("mongoose");
const sampleRoute = require("./routes/sample.route.js");
const cors = require("cors");

const app = express();

// middleware
app.use(cors()); // solve CORS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/samples", sampleRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated!");
});

const database = "sample_test";
const apiPort = 3000;

const mongoStr = `mongodb+srv://levi970516:HyZMGVE9y6QeWIVo@cluster0.7yr9ilq.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(mongoStr)
  .then(() => {
    console.log("Connected to database!");
    app.listen(apiPort, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
