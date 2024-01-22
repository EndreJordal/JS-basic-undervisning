// DOM Manipulation
// Document Object Model

const grandParent = document.getElementById("grandparent");
const child = document.getElementById("child");
const parents = document.querySelectorAll(".parent");
//const children = document.querySelectorAll(".child");
const children = document.getElementsByClassName("child");
//grandParent.remove();

const whiteMaker = (elem) => {
  elem.style.backgroundColor = "white";
};
//whiteMaker(grandParent);
//whiteMaker(child);
/* whiteMaker(parent[1]);
whiteMaker(parent[0]); */

// DRY

/* for (let i = 0; i < children.length; i++) {
  whiteMaker(children[i]);
} */

//grandParent.classList.add("child");
const newElement = document.createElement("h1");
newElement.textContent = "JEG BLE LAGET I JAVASCRIPT!! 😄😄😄";
newElement.classList.add("child");

const middle = Math.floor(parents.length / 2);
grandParent.insertBefore(newElement, parents[middle]);

const fruits = [
  { name: "Kiwi", icon: "🥝" },
  { name: "Apple", icon: "🍎" },
  { name: "Pear", icon: "🍐" },
  { name: "Melon", icon: "🍉" },
  { name: "Mango", icon: "🥭" },
  { name: "Orange", icon: "🍊" },
  { name: "Kiwi", icon: "🥝" },
  { name: "Apple", icon: "🍎" },
  { name: "Pear", icon: "🍐" },
  { name: "Melon", icon: "🍉" },
  { name: "Mango", icon: "🥭" },
  { name: "Orange", icon: "🍊" },
];

/* const fruitList = document.createElement("ol");
document.body.append(fruitList);

for (let fruit of fruits) {
  const fruitItem = document.createElement("li");

  fruitItem.style.fontFamily = "Arial";
  fruitItem.classList.add("child");
  const name = document.createElement("p");
  name.textContent = fruit.name;
  const icon = document.createElement("h1");
  icon.textContent = fruit.icon;
  fruitItem.append(name, icon);
  fruitList.prepend(fruitItem);
} */

{
  /* <ol>
  <li>
    <h3>Name of the fruit</h3>
    <h1>Icon here</h1>
  </li>
</ol>; */
}

const cool = document.createElement("div");
cool.innerHTML = "<h1>Hey!</h1> <p>P tag here</p>";

document.body.append(cool);
