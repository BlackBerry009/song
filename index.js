const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getSongURL } = require("./song.js");
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

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
