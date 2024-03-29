const fs = require("fs");

const { kingdoms } = require("./util");

kingdoms.forEach(kingdom => {
  const kingdomFilename = kingdom.toLowerCase().replace(/ /g, "-");
  let kingdomData = fs.readFileSync(
    `./json/monarchs/raw/${kingdomFilename}.json`,
    "utf8"
  );
  console.log(`Read Data: ${kingdom}`);

  kingdomData = JSON.parse(kingdomData);

  kingdomData.forEach(data => {
    data.kingdom = kingdom;
  });

  fs.writeFile(
    `./json/monarchs/withKingdom/${kingdomFilename}.json`,
    JSON.stringify(kingdomData),
    err => {
      if (err) throw err;
      console.log(`Finish writing data: ${kingdom}`);
    }
  );
});
