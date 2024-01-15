const names = [ "Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick", "Joe" ]

/* const reversedNames = []
for (let name of names) {
    // "Tom" -> ["T", "o", "m"] -> ["m", "o" "T"] -> "moT"
    reversedNames.unshift(name.split("").reverse().join(""))
}
console.log(reversedNames) */

function printPyramid (height) {
    for (let i = 1; i <= height; i++) {
        let spaces = " ".repeat(height - i)
        let asterisks = "*".repeat(2 * i  - 1)
        console.log(spaces + asterisks)
    }
}
//printPyramid(7)

// Make a function that returns an array of random numbers between 1 and X. The array should be Y long

const makeNumberArray = (size, maxNum) => {
    // Initialize an empty array
    const numArray = []
    // Fill the array with random numbers based on parameters.
    for (let i = 0; i < size; i++) {
        numArray.push(Math.ceil(Math.random() * maxNum))
    }
    // Return the array
    return numArray

}

const randomNums = makeNumberArray(1000, 5000)
console.log(randomNums)


// Lage en hilsen til hver person i names arrayet

/* console.log(`God dag ${names[0]}`)
console.log(`God dag ${names[1]}`)
console.log(`God dag ${names[2]}`)
console.log(`God dag ${names[3]}`)
console.log(`God dag ${names[4]}`) */

// DRY - Don't Repeat Yourself

// LOOPS

// For loop

/* for (let i = 0; i < names.length; i++) {
    console.log(`God dag ${names[i]}`)
} */

// For of

/* const greetings = []
for (let name of names) {
    greetings.push(`God dag ${name}`)
    console.log(greetings)
}
console.log(greetings) */

// While loop
// lage et random tall mellom 1-10
const randomNumber = Math.ceil(Math.random() * 10)
//console.log(randomNumber)
let guess = 0

/* while (randomNumber !== guess) {
    guess++
    console.log("I'm guessing: "+ guess)
} */