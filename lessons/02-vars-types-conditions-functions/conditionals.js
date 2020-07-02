const firstName = "Sam";
let age = 5
let likesChicken = false 
let drivingLicense = undefined
const surname = "Barker"

if (age >= 18) {
    console.log("Can go to bar")
} else {
    console.log("user is not old enough")
}

if (surname.charAt(0) === "B") {
    console.log("Surname starts with B")
}

if (drivingLicense !== undefined) {
    if (drivingLicense < 0) {
        console.log("EXPIRED, PLEASE DON't DRIVE")
    } else {
        console.log("GO DRIVING")
    }
} else {
    console.log("learn to drive")
}

drivingLicense = 1;

if (drivingLicense !== undefined) {
    if (drivingLicense < 0) {
        console.log("EXPIRED, PLEASE DON't DRIVE")
    } else {
        console.log("GO DRIVING")
    }
} else {
    console.log("learn to drive")
}

drivingLicense = -1;


if (drivingLicense !== undefined) {
    if (drivingLicense < 0) {
        console.log("EXPIRED, PLEASE DON't DRIVE")
    } else {
        console.log("GO DRIVING")
    }
} else {
    console.log("learn to drive")
}

// likesChicken ? true : false

if (likesChicken) {
    // eat(chicken)
} else if (!likesChicken && age < 10) {
    // forceeat(chicken)
}


if (likesChicken) {
    // eat(chicken)
} else if (age < 10) {
    // forceeat(chicken)
}


true
false

0 // falsey
undefined // falsey
null // falsey
"" // falsey


1 // truthy
10
10056563e0
-37

const accountBalance = 10;

if (accountBalance > 0) {
    processPurchase()
}

let bike;

if (!!bike) {

}