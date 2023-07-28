function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  return person.age > 20;
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output);