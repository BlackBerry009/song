const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getSongURL } = require("./song.js");
const cors = require('cors')

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", "Express");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/getSongUrl", async (req, res) => {
  const {url, singerName, songName} = await getSongURL(req.query.url);
  res.json({
    url,
    singerName,
    songName
  });
});

const port = 12306;
app.listen(port, (error) => {
  console.log(`server running on ${port}`);
});

module.exports = app;
