// Write your function here
function getLastElementOfProperty(object, key) {
    if (!object[key]) {return undefined};
    return object[key][object[key].length - 1];
}

let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5