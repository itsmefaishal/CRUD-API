const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/users.routes");
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World from crud by faishal");
});

app.use("/api/user", userRoutes);

mongoose
  .connect(
    "mongodb+srv://faishalrahman79:h1WGILJdjK7lFEn4@cluster0.qkqnz69.mongodb.net/CRUD-APP-API?retryWrites=true&w=majority&appName=Cluster0"
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
