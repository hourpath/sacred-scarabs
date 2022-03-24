const fs = require("fs");

const fileData = fs.readFileSync("./2.json", "utf8");
// Use JSON.parse to convert string to JSON Object
const jsonData = JSON.parse(fileData);
//console.log(jsonData);

// 2. update the value of one key

// if (jsonData["attributes"]["trait_type"] == "bottomRight") {
for (val of jsonData["attributes"]) {
  if (val.value == "om") {
    val.value = "ohm";
  }
}

// 3. write it back to your json file
fs.writeFile("./2.json", JSON.stringify(jsonData, null, 1), (err) => {
  if (err) {
    console.log(err);
  }
});
