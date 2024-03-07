const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const userRoutes = require("./routes/users.routes");
const userName = process.env.APP_USER_NAME;
const password = process.env.APP_PASSWORD;

app.use(express.json());
app.use("/api/user", userRoutes);

app.get("/", function (req, res) {
  res.send("Hello World from crud by faishal");
});


mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.qkqnz69.mongodb.net/CRUD-APP-API?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected to mongodb");
    app.listen(3000, () => {
      console.log("server on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
