const fs = require("fs");
const axios = require("axios");
const { kingdoms, baseUrls } = require("./util");

const wikiUrl = baseUrls.wikipedia;

kingdoms.forEach(kingdom => {
  const kingdomName = kingdom.replace(/ /g, "_");
  axios(`${wikiUrl}/${kingdomName}`).then(res => {
    const kingdomData = res.data;
    const kingdomFilename = kingdom.toLowerCase().replace(/ /g, "-");

    fs.writeFile(
      `./json/kingdoms/raw/${kingdomFilename}.json`,
      JSON.stringify(kingdomData),
      err => {
        if (err) throw err;
        console.log(`Finish writing data: ${kingdom}`);
      }
    );
  });
});
