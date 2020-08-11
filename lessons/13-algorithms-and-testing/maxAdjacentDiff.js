const testArray = [5, 28, 19, 21, 4, 6];
const maxAdjacentDiff = array => {
    let currentMaxDiff = 0;

    array.forEach((number, i) => {
        if (i === array.length - 1) return;

        const nextNumber = array[i + 1]
        const diff = Math.abs(number - nextNumber)

        if (diff > currentMaxDiff)
            currentMaxDiff = diff
    })

    return currentMaxDiff;
}

console.log(maxAdjacentDiff(testArray));
console.log(maxAdjacentDiff([43, 22, 1000, 45, 123]));

const maxAdjacentDiffPairs = array => {
    const pairs = array.reduce((pairs, number, i) => {
        if (i >= array.length - 1) return pairs

        return [
            ...pairs,
            [number, array[i + 1]]
        ]
    }, [])

    console.log(pairs)

    const differences = pairs.map(pair => {
        return Math.abs(pair[0] - pair[1])
    })

    console.log(differences)

    return Math.max(...differences)
}
console.log(maxAdjacentDiffPairs(testArray));
console.log(maxAdjacentDiffPairs([43, 22, 1000, 45, 123]));


const teodora = array => {
    let max = -1;
    for (let i =0; i< array.length - 1; i++){
      let diff = Math.abs(array[i] - array[i + 1]);
      max = Math.max(max, diff);
    }
    return max;
}
console.log(teodora(testArray))
console.log(teodora([43, 22, 1000, 45, 123]))