const fs = require("fs");
const axios = require("axios");
const { kingdoms, baseUrls } = require("./util");

const wikiUrl = baseUrls.wikipedia;

kingdoms.forEach(kingdom => {
  let kingdomName = kingdom.replace(/ /g, "_");
  axios(`${wikiUrl}/${kingdomName}`).then(res => {
    const kingdomData = res.data;
    kingdomName = kingdom.toLowerCase().replace(/ /g, "-");

    fs.writeFile(
      `./json/kingdoms/raw/${kingdomName}.json`,
      JSON.stringify(kingdomData),
      err => {
        if (err) throw err;
        console.log(`Finish writing data: ${kingdom}`);
      }
    );
  });
});
