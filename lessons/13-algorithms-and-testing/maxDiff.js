const testArray = [5, 28, 19, 21, 4, 6];
const maxDiff = array => {
    let highestDiff = 0;

    array.forEach((number, i) => {
        array.forEach((otherNumber, j) => {
            if (i === j) return;
            
            if (Math.abs(number - otherNumber) > highestDiff)
                highestDiff = Math.abs(number - otherNumber)
        });
    });

	return highestDiff;
}
// console.log(maxDiff(testArray));
// console.log(maxDiff([100, 0, 5, 10]));

const maxDiffMinMax = (array) => {
    const max = Math.max(...array)
    const min = Math.min(...array)
    return Math.abs(max - min)
} 
// console.log(maxDiffMinMax(testArray));
// console.log(maxDiffMinMax([-100, 0, 5, 10]));

const maxDiffSort = (array) => {
    const copyOfArray = [...array]
    copyOfArray.sort((a, b) => a - b)
    return Math.abs(copyOfArray[0] - copyOfArray[copyOfArray.length - 1])
}
// console.log(maxDiffSort(testArray));
// console.log(maxDiffSort([100, 0, 5, 10]));


module.exports = maxDiff