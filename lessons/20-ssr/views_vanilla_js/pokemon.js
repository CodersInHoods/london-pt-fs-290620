const PokemonItem = (pokemon) =>
  `<a style="display: block;" href="${pokemon.url.replace(
    "https://pokeapi.co/api/v2",
    ""
  )}">${pokemon.name}</a>`;

module.exports = PokemonItem;
