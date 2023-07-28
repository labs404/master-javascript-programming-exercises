// Write your function here
function getFirstElementOfProperty(object, key) {
    if (!object[key]) {return undefined};
    return object.key[0];
}

let obj = {
    key: [1, 2, 4]
  };
  let output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1