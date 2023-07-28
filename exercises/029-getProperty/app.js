function getProperty(obj, key) {
  // your code here
  return obj[key];
};

let vehicle = {
  make: "Chevrolet"
};

console.log(getProperty(vehicle, "make"))