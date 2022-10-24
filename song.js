const axios = require("axios");
const cheerio = require("cheerio");

// 'http://tx.stream.kg.qq.com/gzc-kgsvp/gzc_0_50111_1021_050e9be8b4a07c96547e47ef80f98afc558114af.f0.m4a?vkey=B087958198896F8FDE399170A2E40F0815314AC4BD791B2B569FCF72B90A4E3E304384E9A828FA8A415608CE4F51D41BB8A673D03B29C647D3B9A14DDDDBA8D20243FB09D71C00593C63ADF93633720B0A647C987D0F0205&dis_k=c408612f43da33329a74e3a8d2ed8435&dis_t=1666434940&fromtag=1021&sdtfrom=v1021&ugcid=763084193_1563861848_271'
// const SONG_URL =
//   "https://kg.qq.com/node/play?s=-lRWX9-IQgDgh-Td&shareuid=659b9e852d29368237&topsource=a0_pn201001006_z1_u763084193_l1_t1666582469__&chain_share_id=EQ0fY2KZX_U6AbG0JsNyAL4M866CaOLTkGtk3waWOiM&pageId=details_of_creations";

const findSong = (str) => {
  const $ = cheerio.load(str);
  const content = $("script:eq(2)").html();
  const prefix = "window.__DATA__ = ";
  const res = content.substring(prefix.length, content.length - 2);
  console.log(JSON.parse(res))
  return JSON.parse(res).detail.playurl;
};

const getSongURL = async (url) => {
  const res = await axios.get(url);
  if (res.status !== 200) {
    getSongURL();
  } else {
    return findSong(res.data);
  }
};

module.exports = {
  getSongURL,
};
