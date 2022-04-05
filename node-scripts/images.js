const fs = require("fs");
let axios = require("axios");

let ipfsArray = [];
let promises = [];

for (let i = 1; i <= 10; i++) {
  promises.push(
    new Promise((res, rej) => {
      fs.readFile(
        `E:/sacred-scarabs/node-scripts/scarabsJson/Sacred Scarabs/build/images/${i}.png`,
        (err, data) => {
          console.log(err + i);
          if (err) rej();
          ipfsArray.push({
            path: `images/${i}.png`,
            content: data.toString("base64"),
          });
          res();
        },
      );
    }),
  );
}

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
