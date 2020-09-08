const fs = require("fs");

const addNewUser = (jsonUser, successCallback) => {
  const userString = JSON.stringify(jsonUser);

  fs.readFile("./db.txt", { encoding: "utf8" }, (err, data) => {
    fs.writeFile("./db.txt", `${data}\n${userString}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      successCallback();
    });
  });
};

const getUser = (username) => {
  const fileData = fs.readFileSync("./db.txt", { encoding: "utf8" });

  const rows = fileData.split("\n");

  const userRow = rows.find((row) => row.includes(`"username":"${username}"`));

  if (!userRow) return null;

  return JSON.parse(userRow)
};

module.exports = {
  addNewUser,
  getUser,
};
