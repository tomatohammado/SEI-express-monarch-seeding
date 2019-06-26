const fs = require("fs");
const { kingdoms } = require("./util");

const allKingdomsData = [];

kingdoms.forEach(kingdom => {
  const kingdomFilename = kingdom.toLowerCase().replace(/ /g, "-");
  let kingdomData = fs.readFileSync(
    `./json/kingdoms/raw/${kingdomFilename}.json`,
    "utf8"
  );

  kingdomData = JSON.parse(kingdomData);

  allKingdomsData.push(kingdomData);
});

fs.writeFile(
  `./json/kingdoms/kingdoms.json`,
  JSON.stringify(allKingdomsData),
  err => {
    if (err) throw err;
    console.log("Finish writing file: monarch.js");
  }
);
