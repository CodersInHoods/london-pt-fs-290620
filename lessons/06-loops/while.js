let i = 0
const target = 50 + Math.random() * 50
while(i < target){
    i += Math.random()
}
console.log(i)

function h() {

}

function generateTicket () {
    return [1,2,3,4,5, Math.random() * 10]
}

function validateTicket (ticket) {
    return ticket[ticket.length - 1] < 4
}
console.log("start ticket generation")
const validTickets = []

let attempts = 0;

while(validTickets.length < 1000) {
    const newTicket = generateTicket()

    if (validateTicket(newTicket)) {
        validTickets.push(newTicket)
    }

    attempts++
}

console.log(validTickets.length, attempts)
console.log("end ticket generation")

let loginAttempts = 0;

function login() {
    if (passwordIsIncorrect()) {
        loginAttempts++;
    }
}

