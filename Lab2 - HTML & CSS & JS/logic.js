console.log("merge");

const firstNameInput = document.querySelector("#fname");
console.log(firstNameInput);

const pageTitle = document.querySelector("h1");
console.log(pageTitle);

const lastNameInput = document.getElementById("lname");
console.log(lastNameInput);

const linkElements = document.querySelectorAll("a")
console.log(linkElements)

const classSelector = document.getElementsByClassName('card')
console.log(classSelector)


firstNameInput.addEventListener("input", (inputValue) => {
    console.log(inputValue);
    pageTitle.textContent = inputValue.target.value;
});

const checkboxOne = document.querySelector("#item1");
const labelOne = document.querySelector("label");
checkboxOne.addEventListener("input", (inputValue) => {
    labelOne.textContent = inputValue.target.checked;
    labelOne.style.color = inputValue.target.checked ? 'green' : 'red';
});


let clickCounter = 0;
const counterDisplay = document.querySelector("h2");
addEventListener("click", () => {
  counterDisplay.textContent = ++clickCounter;
});


const shorterLambdaFunction = (text) => text;

const longerLambdaFunction = (text) => {
  return text;
};

function normalFunction(text) {
  return text;
}

console.log(normalFunction("I am called by a normal function"));
console.log(shorterLambdaFunction("I am called by the shorter lambda"));
console.log(longerLambdaFunction("I am called by the longer lambda"));


const simpleArray = [1, 2, 3, 4, 5, 6, 7];

simpleArray.forEach((item) => {
  console.log(item);
});

console.log(simpleArray.filter((item) => item % 2 === 0));

simpleArray.push(8)
console.log(simpleArray);

console.log(simpleArray.find((item) => item % 2 === 0));

const existsGreaterThan5 = simpleArray.some((item) => item > 5);
console.log(existsGreaterThan5);

const persons = [{name: "Ana", age: 22}, {name: "Alice", age: 21}];
const formattedArray = persons.map((person) => {
  return person.name
})
console.log(formattedArray)

const person = {name: "Ana", age: 22}
const updatedPerson = {...person, city: "Brasov"};
console.log(updatedPerson)

// person = {name: "Alice", age: 23}; nu va functiona!
person.age = 23;
person.name = "Alice" 
console.log(person)

let age = 20;
age = 30;
console.log(age);

if (true) {
    let a = 10;
    const b = 20;
    console.log(a, b); 
}
// console.log(a,b) //nu va functiona!
