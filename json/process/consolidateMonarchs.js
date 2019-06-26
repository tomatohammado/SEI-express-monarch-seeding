const fs = require("fs");
const { kingdoms } = require("./util");

const allMonarchsData = [];

kingdoms.forEach(kingdom => {
  const kingdomFilename = kingdom.toLowerCase().replace(/ /g, "-");
  let monarchData = fs.readFileSync(
    `./json/monarchs/withKingdom/${kingdomFilename}.json`,
    "utf8"
  );

  monarchData = JSON.parse(monarchData);

  monarchData.forEach(monarch => allMonarchsData.push(monarch));
});

fs.writeFile(
  `./json/monarchs/monarchs.json`,
  JSON.stringify(allMonarchsData),
  err => {
    if (err) throw err;
    console.log("Finish writing file: monarch.js");
  }
);
