function checkAge(name, age) {
  // your code here
  if (age > 20) {
    return "Welcome, " + name + "!";
  } else {
    return "Go home, " + name + "!";
  }
}

console.log(checkAge("steve", 30));