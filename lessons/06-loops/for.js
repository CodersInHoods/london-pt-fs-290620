const stations = [
    { name: "whitstable", usage: 1.2 },
    { name: "romford", usage: 2 },
    { name: "earlsfield", usage: 2.3 },
    { name: "East Tilbury", usage: 0.3 },
    { name: "angel", usage: 4 },
    { name: "barking", usage: 6 },
  ];


console.log("--- counting up from 0")
for (let counter = 0; counter < 6; counter++) {
    console.log(counter)
}

console.log("--- nice numbers")
for (let counter = 1; counter <= 6; counter++) {
    console.log(counter)
}

console.log("--- elements in an array")
for (let i = 0; i < stations.length; i++) {
    const station = stations[i]
    console.log(station)
}

console.log("--- counting in other ways")
for (let i = 5346345645; i > 3534645; i = Math.random() * 100000000) {
    console.log(`i is ${i}`)
}

console.log("--- not numbers")
for (const person = { name: "s"}; person.name !== 'sJJJJJJJJ'; person.name = person.name + "J") {
    console.log(person)
}

console.log("--- nested for loops")

for (let index = 0; index < stations.length; index++) {
    const station = stations[index];
    for (let millions = 0; millions < station.usage; millions += 0.1) {
        console.log(`${station.name} has not reached capacity yet, ${millions}`)
    }
    console.log(`reached capacity of ${station.usage}`)
}

const arrayOfArrays = [
    [5,5,5],
    [6,8,90,2]
]

for (let i = 0; i < arrayOfArrays.length; i++) {
    const arrayOfNumbers = arrayOfArrays[i];
    for (let j = 0; j < arrayOfNumbers.length; j++) {
        const number = arrayOfNumbers[j];
        
    }
}

const grid = []

// [
// [1, 0, 1]
// [0, 1, 0]
// [0, 1, 0]
// ]

for (let y = 0; y < 3; y++) {
    const row = []
    for (let x = 0; x < 3; x++) {
        row.push({ x: x, y: y});
    }
    grid.push(row)
}

console.log(grid)


console.log("--- modifying the counter")
for (let counter = 0; counter <= 6; counter++) {
    console.log(counter)
    if (counter === 3) {
        counter += 10
    }
}