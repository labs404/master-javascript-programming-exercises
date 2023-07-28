function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

let emptyObject = {};
addProperty(emptyObject, "hamburger");
console.log(emptyObject.hamburger);