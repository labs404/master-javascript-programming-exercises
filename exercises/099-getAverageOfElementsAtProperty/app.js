function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let x = obj[key];
  if (!x || x.length == 0 || !Array.isArray(x)) {return 0};
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum / x.length

}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 