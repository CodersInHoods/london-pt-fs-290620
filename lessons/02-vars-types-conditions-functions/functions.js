function greetPerson(name) {
    return `Hello ${name}`
}

console.log(greetPerson())
console.log(greetPerson("Sam"))
console.log(greetPerson(11))

function addTip (total, tipPercentage) {
    return total + (total * (tipPercentage / 100))
}


console.log(addTip(100, 10))
console.log(addTip(45.28, 15))

const totalAfterTip = addTip(234, 1)

// console.log(totalAfterTip)

function addTax (total) {
    return total * 1.2
}

const total = addTax(totalAfterTip)

// console.log(total)

function makeTea (m) {
    boilKettle()

    const mug = m

    placeBag(mug)
    pourWater(mug)
    stirTea(mug)
    drink(mug)
}