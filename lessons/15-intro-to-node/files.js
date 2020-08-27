const fs = require("fs");
const path = require("path");

const relativeMemesPath = "./memes.txt";

const memesPath = path.resolve(process.cwd(), relativeMemesPath)

// callback

fs.readFile(memesPath, "utf8", (error, data) => {
  if (error) throw error;

  console.log(data);
});

// sync

const data = fs.readFileSync(memesPath, "utf8");

console.log("data sync", data);

// promise

const fsp = fs.promises;

fsp
  .readFile(memesPath, "utf8")
  .then((data) => console.log("promise data", data))
  .catch((error) => console.error("error", error));

console.log(fsp);

(async () => {
    const data = await fsp.readFile(memesPath, "utf8")

    console.log(data)
})()