const fetch = require("node-fetch");

module.exports = {
  getAllPokemon: () =>
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) => data.results),
  getPokemon: (id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
};
