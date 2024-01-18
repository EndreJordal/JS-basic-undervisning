// Loops

// For loop

/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

const fruits = ["Apple", "Banana", "Cherries"];

// For of loop

/* for (let fruit of fruits) {
  console.log(fruit);
} */

// While loop

/* const secretNum = 7;

let guess = 0;

while (secretNum !== guess) {
  console.log(guess);
  guess++;
} */

// Objects

const myObject = {
  firstName: "Yngve",
  lastName: "Hansen",
  age: 19,
};

/* const fullName = [myObject.firstName, myObject.lastName];
console.log(fullName); */

const article =
  "In the vast landscape of manufacturing industries, there exists a realm of monotony that often escapes the notice of the average person - the world of paperclip production. Nestled between the more glamorous sectors like electronics and automotive, paperclip manufacturing stands as a testament to the overlooked banalities that keep the wheels of bureaucracy turning. In this article, we embark on a journey into the seemingly unexciting process of creating those small, nondescript metal loops that bind our documents together. Whaaaaaaaaaaaaaaaaa";

// Make a function that takes in a string, and returns
// the longest word in the string received.
//console.log(article.split(" "));
const findLongestWord = (str) => {
  let longestWord = "";
  for (let word of str.split(" ")) {
    if (word.length >= longestWord.length) {
      longestWord = word;
      console.log(longestWord);
    }
  }
  return `${longestWord} was the longest word in the string with ${longestWord.length} characters 👍`;
};

console.log(findLongestWord(article));
