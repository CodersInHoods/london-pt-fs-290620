const teams = ["spurs", "man u", "man c", "chelsea", "accrington stanley", "barking"]
const points = [1.2, 2, 2.3, 0.3, 4, 6]

for (const key in points) {
    const value = points[key];
    console.log(key, value)
}

for (const key in teams) {
    const value = teams[key];
    console.log(key, value)
}

const pokemon = {
    id: 5,
    name: "pikachu",
    type: "electric",
    stats: [
        {
            stat: "hp",
            value: 100
        }
    ]
}

for (const key in pokemon) {
    const value = pokemon[key];
    console.log(key, value)
}


const keys = Object.keys(pokemon)

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = pokemon[key]
    console.log(key, value)
}