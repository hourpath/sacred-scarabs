const fs = require("fs");
const path = require("path");
var path2 = "node-scriptsScarabsJsonSacred Scarabsjsons";

fs.readdir(
  "E:/sacred-scarabs/node-scripts/scarabsJson/Sacred Scarabs/jsons",
  handleFiles,
);

// fs.readdir(path, handleFiles);

function handleFiles(err, files) {
  for (let i = 1; i < files.length; i++) {
    console.log(files[i]);
    const fileData = fs.readFileSync(
      "E:/sacred-scarabs/node-scripts/scarabsJson/Sacred Scarabs/jsons/" +
        files[i],
      "utf8",
    );
    // Use JSON.parse to convert string to JSON Object
    const jsonData = JSON.parse(fileData);
    //console.log(jsonData);

    for (val of jsonData["attributes"]) {
      if (val.value == "ohm2") {
        val.value = "ohmNEW";
      }
    }

    jsonData[
      "image"
    ] = `https://ipfs.moralis.io:2053/ipfs/QmYdEQk6vQG5AbdSyGCSwxKMqsYYQFCWrKm6USrUfU9XFp/images/${jsonData["edition"]}.png`;

    // 3. write it back to your json file
    fs.writeFile(
      "E:/sacred-scarabs/node-scripts/scarabsJson/Sacred Scarabs/jsons/" +
        files[i],
      JSON.stringify(jsonData, null, 1),
      (err) => {
        if (err) {
          console.log(err);
        }
      },
    );
  }
}
