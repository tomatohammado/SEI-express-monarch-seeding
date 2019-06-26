const fs = require("fs");

const { kingdoms } = require("./util");

kingdoms.forEach(kingdom => {
  const kingdomFilename = kingdom.toLocaleLowerCase().replace(/ /g, "-");
  let kingdomData = fs.readFileSync(
    `./json/raw/${kingdomFilename}.json`,
    "utf8"
  );
  console.log(`Read Data: ${kingdom}`);

  kingdomData = JSON.parse(kingdomData);

  kingdomData.forEach(data => {
    data.kingdom = kingdom;
  });

  fs.writeFile(
    `./json/withKingdom/${kingdomFilename}.json`,
    JSON.stringify(kingdomData),
    err => {
      if (err) throw err;
      console.log(`Finish processing: ${kingdom}`);
    }
  );
});
