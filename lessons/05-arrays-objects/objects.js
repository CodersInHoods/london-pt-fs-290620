const stations = [
  { name: "whitstable", usage: 1.2 },
  { name: "romford", usage: 2 },
  { name: "earlsfield", usage: 2.3 },
  { name: "East Tilbury", usage: 0.3 },
  { name: "angel", usage: 4 },
  { name: "barking", usage: 6 },
];

const firstStation = stations[0]

console.log(`name: ${firstStation.name}, used by ${firstStation.usage}m`)

function useAStation(index) {
    const station = stations[index]

    station.usage++

    return `name: ${station.name}, used by ${station.usage}m`
}

console.log(useAStation(0))
console.log(useAStation(4))

function addCustomStat(stationIndex, key, value) {
    const station = stations[stationIndex]

    station[key] = value

    return station
}

console.log(addCustomStat(0, "best fish and chips", "vc jones"))

// station.best fish and chips
console.log(stations[1]["best fish and chips"])

function deleteKey(stationIndex, key) {
    const station = stations[stationIndex]

    delete station[key]


    return station
}
console.log(deleteKey(0, "best fish and chips"))


console.log(addCustomStat(3, {isinlondon: false}, "false"))
console.log(addCustomStat(4, 5, false))

console.log(true, (true).toString())
console.log(5, (5).toString())
console.log({}, ({}).toString())
console.log(["sam"], (["sam"]).toString())

const names = ["sam", "vasile"]

const fakeArray = {
    0: "sam",
    1: "vasile",
    length: 2
}

console.log(fakeArray[0])
console.log(fakeArray.length)