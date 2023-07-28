function or(expression1, expression2) {
  // your code here
  return !(!expression1 == true && !expression2 == true)  
}

let output = or(true, false);

console.log(output); // --> true;
