const station = { name: "whitstable", usage: 1.2 }

console.log(station.name)
console.log(station.usage)

console.log(station["name"])
console.log(station["usage"])


let key = "name";
console.log(station[key])
key = "usage"
console.log(station[key])

function getKey(object, key) {
    return object[key]
}

console.log(getKey(station, "name"))
console.log(getKey(station, "usage"))

function stationInfo(key) {
    if (station[key] === undefined) {
        return "NOT FOUND"
    }

    return station[key]
}

console.log(stationInfo('name'))
console.log(stationInfo('usage'))