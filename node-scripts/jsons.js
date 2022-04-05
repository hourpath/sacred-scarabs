const fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for (let i = 1431; i <= 1500; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(
        `E:/sacred-scarabs/node-scripts/scarabsJson/Sacred Scarabs/jsons/${i}.json`,
        (err, data) => {
          //   console.log(err + i);
          const jsonData = JSON.parse(data);
          //console.log(jsonData);
          if (err) rej();
          ipfsArray.push({
            path: `metadata/${i}.json`,
            content: {
              ...jsonData,
            },
          });
          //   console.log(ipfsArray[0]);
          res();
        },
      );
    }),
  );
}

//console.log(ipfsArray[1]);

Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: {
        "X-API-KEY":
          "pyzzCaBBqtlPBd9CAE0fzqON8Nh3QZWQNMT264Q1r7g1sNdUBDJdTswHyvfWXrbP",
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
