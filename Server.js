const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Trading Engine Aktif 🔥");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
