const PokemonPage = (pokemon) => {
    return `
        <html>
            <head>
            </head>
            <body>
                <h1>${pokemon.name}</h1>
                <ul>
                ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
            </body>
        </html>
    `
};

module.exports = PokemonPage