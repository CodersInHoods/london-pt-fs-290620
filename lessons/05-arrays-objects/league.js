const stations = ["whitstable", "romford", "earlsfield", "East Tilbury", "angel", "barking"]
const usageStats = [1.2, 2, 2.3, 0.3, 4, 6]

const teams = ["spurs", "man u", "man c", "chelsea", "accrington stanley", "barking"]
const points = [1.2, 2, 2.3, 0.3, 4, 6]

const hospitals = ["queen mary", "nightingale", "earlsfield", "East Tilbury", "angel", "barking"]
const covidPatients = [1.2, 2, 2.3, 0.3, 4, 6]

function displayRow(labels, values, sortedValues, value) {
    // for each value, find index in original array
    const valueIndex = values.indexOf(value)
    // get label from labels array using value index
    const label = labels[valueIndex]
    // display label + value index in sorted array
    console.log(`${sortedValues.indexOf(value) + 1}: ${label}, ${value}`)
}

function displayTable(labels, values) {
    // copy values array
    const copiedValues = values.slice()
    // sort copy of values
    copiedValues.sort().reverse()
   
    displayRow(labels, values,copiedValues, copiedValues[0])
    displayRow(labels, values,copiedValues, copiedValues[1])
    displayRow(labels, values,copiedValues, copiedValues[2])
    displayRow(labels, values,copiedValues, copiedValues[3])
    displayRow(labels, values,copiedValues, copiedValues[4])
    displayRow(labels, values,copiedValues, copiedValues[5])
}

displayTable(stations, usageStats)
displayTable(teams, points)
displayTable(hospitals, covidPatients)