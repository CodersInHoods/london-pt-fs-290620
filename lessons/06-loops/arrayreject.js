const ages = [3, 19, 4, 267, 24, 55, 80, 93]

function reject(arrayOfNumbers, minimum, maximum) {
    const numbersWhichMatch = []

    for (const number of arrayOfNumbers) {
        if (number > minimum && number < maximum) {
            numbersWhichMatch.push(number)
        }
    }

    return numbersWhichMatch
}

console.log(reject(ages, 18, 60))
console.log(ages)