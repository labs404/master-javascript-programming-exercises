// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let x = obj[key];   
    if (!x || x.length == 0 || !Array.isArray(x)) {return []}
    let newA = []; 
    x.forEach(el => {if (el > 10) {newA.push(el);}});
    return newA;
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]