const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getSongURL } = require("./song.js");

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "Express");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/getSongUrl", async (req, res) => {
  const songURL = await getSongURL(req.query.url);
  res.json({
    url: songURL,
  });
});

const port = 12306;
app.listen(port, (error) => {
  console.log(`server running on ${port}`);
});

module.exports = app;
