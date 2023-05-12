const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const playerRouter = require("./routes/playerRoutes");

// static middleware
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

app.use("/api/players", playerRouter);

app.use((err, req, res) => {
  console.log("error is", err.status);
  res.send(err.message);
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
