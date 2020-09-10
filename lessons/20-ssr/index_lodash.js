const fs = require('fs');
const express = require("express");
const db = require("./db");
const PokemonsPage = require("./views/pokemons");

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const PokemonPage = require("./views/pokemonPage.erb.html");

const _ = require('lodash');

const pokemonPage = _.template(PokemonPage);

const app = express();

app.get('/', (req, res) => {
    db.getAllPokemon().then(pokemons => {

        res.send(PokemonsPage(pokemons))
    })
})

app.get('/pokemon/:id', (req, res) => {
    db.getPokemon(req.params.id).then(pokemon => {
        
        res.send(pokemonPage({ pokemon }))
    })
})

app.listen(3000, () => console.log("listening on 3000"));
