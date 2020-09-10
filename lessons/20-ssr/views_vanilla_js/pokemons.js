const PokemonItem = require("./pokemon");

const PokemonsPage = (pokemons) => {
    return `
        <html>
            <head>
            </head>
            <body>
                <h1>Welcome to the pokemoin site</h1>
                ${pokemons.map(PokemonItem).join('')}
            </body>
        </html>
    `
};

module.exports = PokemonsPage