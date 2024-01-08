// Functions

// Function keyword - hoisting
//myFunction()
function myFunction() {
    console.log("Funksjonen har kjørt")
}


// Arrow syntax, arrowfunction

const myArrowFunction = () => {
    console.log("Arrowfunction har kjørt")
}
//myArrowFunction()

// Return statement
const myReturn = () => {
    const text = "Hello"
    return text
}
const received = myReturn()
//console.log(myReturn(), myReturn())
//console.log(text)
// Scope
let lives = 4
function lifeChanger() {
    lives--
}
/* lifeChanger()
console.log(lives)
lifeChanger()
console.log(lives)
lifeChanger()
console.log(lives)
lifeChanger()

console.log(lives) */

// Parameters

function greeter (name) {
    return `Good day ${name}`
}
const greeting = greeter("or not")
//console.log(greeting)

const adder = (num1, num2) => num1 + num2

/* console.log(adder(4423, 873462))
console.log(adder(3, 3))
console.log(adder(51, 5)) */
// Implied return statement

/* function calculator(num1, num2, operator) {
    let total
    if (operator === "+") {
        total = num1 + num2
    } else if (operator === "-") {
        total = num1 - num2
    } else if (operator === "*") {
        total = num1 * num2
    } else if (operator === "/") {
        total = num1 / num2
    } else {
        total = "Invalid operator"
    }
    return total
} */
/* function calculator(num1, num2, operator) {   
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    } else {
        return "Invalid operator"
    }   
} */
function calculator(num1, num2, operator) {   
    // Switch/case
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Invalid operator"
    }
}
const result = calculator(3, 423, "a")
console.log(result)