const factorial = (number) => {
    if (number === 0 || number === 1) return 1;

    let total = number;
    let multiplier = number - 1;

    while (multiplier > 1) {
        total *= multiplier;
        multiplier--;
    }

    return total;
}

// console.log(factorial(5))
// console.log(factorial(10))
// console.log(factorial(0))

const factorialArray = (number) => {
    const numbers = []

    for (let counter = number; counter > 1; counter--) {
        numbers.push(counter)
    }

    return numbers.reduce((total, num) => {
        return total * num
    }, 1)
}


// console.log(factorialArray(5))
// console.log(factorialArray(10))
// console.log(factorialArray(0))

module.exports = factorial