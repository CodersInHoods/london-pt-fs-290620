const stations = ["whitstable", "romford", "earlsfield", "East Tilbury", "angel", "barking"]
const usageStats = [1.2, 2, 2.3, 0.3, 4, 6]

console.log("stations", stations)
console.log("usageStats", usageStats)

const firstStation = stations[0]
// stations.shift()

console.log('firstStation', firstStation)

console.log("stations again", stations)
const lastStation = stations[stations.length - 1]
// stations.pop()

console.log('lastStation', lastStation)

console.log("stations again", stations)

const indexOfFirstStation = stations.indexOf(firstStation)

console.log("indexOfFirstStation", indexOfFirstStation)

const indexOfEarlsfield = stations.indexOf("earlsfield")

console.log(indexOfEarlsfield)

console.log(`earlsfield is used ${usageStats[indexOfEarlsfield]} million times per year`)

// usageStats.sort()

console.log(usageStats)

function usageStat(stationName) {
    const indexOfStation = stations.indexOf(stationName)

    if (indexOfStation === -1) {
        return "That station is not in our database"
    }

    return usageStats[indexOfStation]
}

console.log(usageStat("barking"))
console.log(usageStat("berking"))

function stationUsageTablePosition(stationName) {
    // make a copy of the stats array to keep the order
    const copyOfStats = usageStats.slice()
    // sort the usageStats array
    copyOfStats.sort().reverse()
    // find the index of stationName in stations
    const stationIndex = stations.indexOf(stationName)
    // find the usageStat using index in ORIGINAL stat order
    const usageStatForStation = usageStats[stationIndex]
    // find the index of stat in ordered stats
    const usageIndexInSorted = copyOfStats.indexOf(usageStatForStation)
    // return the value at that index
    return usageIndexInSorted + 1
}

console.log(stationUsageTablePosition(stations[0]), stations[0])
console.log(stationUsageTablePosition(stations[1]), stations[1])
console.log(stationUsageTablePosition(stations[2]), stations[2])
console.log(stationUsageTablePosition(stations[3]), stations[3])
console.log(stationUsageTablePosition(stations[4]), stations[4])
console.log(stationUsageTablePosition(stations[5]), stations[5])

