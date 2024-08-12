const express = require("express");
const app = express();
const port = 3000;
require("./config/db");
var bodyParser = require("body-parser");
const router = require("./routes/Route");
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
