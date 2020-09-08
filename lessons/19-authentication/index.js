const express = require("express");
const app = express();
const db = require("./db");
const jwt = require("jwt-simple");

const SECRET_KEY = "mysecretkeysfroungeojnergiune";

app.use(express.static("./static"));
app.use(express.json());
app.use(express.urlencoded());

const bcrypt = require("bcrypt");
const saltRounds = 10;

// bcrypt.hash("Password123", saltRounds, (err, hash) => {
//   if (err) console.error(err);
//   else console.log("hash:", hash);
// });

// bcrypt.compare(
//   "Password123",
//   "$2b$10$vPXwuK7evOQAaxpwVLKoQ.8IlRxBPGI4jpqN2GqbJGg9i7tji0YHG",
//   (err, result) => {
//     if (err) console.error(err);
//     else console.log("result", result);
//   }
// );

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/signup", (req, res) => {
  if (req.body.password !== req.body.passwordConfirmation) {
    return res.status(403).send("oops your passwords must match");
  }

  // if username already exists

  // if email is valid

  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "oops" });
    } else {
      db.addNewUser({ username: req.body.username, passwordHash: hash }, () => {
        res.status(201).send({ user: req.body.username });
      });
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = db.getUser(username);

  if (!user) {
    return res.status(403).send("wrong username");
  }

  bcrypt.compare(password, user.passwordHash, (err, result) => {
    if (err) res.status(403).send("wrong everything");
    else if (result) {
      res
        .status(202)
        .json({
          user: { ...user, passwordHash: undefined },
          token: jwt.encode({ ...user, passwordHash: undefined }, SECRET_KEY),
        });
    } else {
      res.status(403).send("wrong passoword");
    }
  });

  // compare password with password hash
});

app.post("/authenticate", (req, res) => {
  const token = req.body.token;

  const user = jwt.decode(token, SECRET_KEY);

  const userinDB = db.getUser(user.username);

  if (!userinDB) {
    return res.status(405).json({ message: "invalid token" });
  }

  res
    .status(203)
    .json({
      user: { ...userinDB, passwordHash: undefined },
      token: jwt.encode(user, SECRET_KEY),
    });
});

app.listen(3000, () => console.log("listening on 3000"));
