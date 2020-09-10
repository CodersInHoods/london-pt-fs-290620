const express = require("express");
const db = require("./db");

const app = express();

app.set("view engine", "pug");
app.use(express.static('scripts'));

app.get("/", (req, res) => {
  db.getAllPokemon().then((pokemons) => {
    res.render("pokemons", {
      pokemons,
    });
  });
});

app.get("/pokemon/:id", (req, res) => {
  db.getPokemon(req.params.id).then((pokemon) => {
    res.render("pokemon", { pokemon });
  });
});

app.listen(3000, () => console.log("listening on 3000"));
