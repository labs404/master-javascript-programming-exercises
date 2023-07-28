function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  return person.age > 17;
}

let obj = {
  age: 19
};

let output = isPersonOldEnoughToVote(obj);

console.log(output); 