// Write your function here
function getNthElementOfProperty(object, key, nthPosition) {
    if (!object[key]) {return undefined};
    return object.key[nthPosition];
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2