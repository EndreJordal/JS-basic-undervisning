/* const myModulo = 5458370 % 2

console.log(myModulo) */

// Conditionals

// IF / ELSE

const userAge = 19
const minimumAge = 20

/* let drink //skal være "Øl" eller "Saft"

if (userAge >= minimumAge) {
    drink = "Øl"
} else {
    drink = "Saft"
} */

// Ternary

/* const drink = userAge >= minimumAge ? "Øl" : "Saft"

console.log(drink) */



/* const password = "1234password"
const correctPassword = "1234password"

if (password !== correctPassword) {
    console.log("Wrong password")
} else {
    console.log("Welcome")
} */

// Logical operators
// Logical AND &&, Logical OR

const x = 3
const y = 5
const z = 6

/* if (x < z || y < z) {
    console.log("One or both are true")
} else {
    console.log("Both are false")
} */

const bothAreTrue = x < z && y < z ? "Both are true" : "One or both are false"
console.log(bothAreTrue)

//const myNumber = 3484

//const numberIsEven = myNumber % 2 === 0 //? "Yes" : "No"

// Truthy / falsy

//const myString = ""
const myNumber = 0
const userName = "Travis"

console.log("2" == 2)

let myString = "Text"

console.log(typeof myString)

/* if (!userName) {
    console.log("You don't have a username")
} */

const firstName = "Trond"
const lastName = "Hansen"
const isCool = false
// Velkommen Trond Hansen! Du er (ikke) kul!

console.log("Velkommen " + firstName + " " + lastName)

// Template literal, template strings.
// Backticks: ``


console.log(`Velkommen ${firstName} ${lastName}! Du er ${isCool ? "" : "ikke"} kul!`)