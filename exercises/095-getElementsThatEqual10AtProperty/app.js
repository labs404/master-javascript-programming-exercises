// Write your function here
function getElementsThatEqual10AtProperty(object, key) {
    if (!object[key]) {return []};
    newArr = [];
    for(let i = 0; i < object[key].length; i++ ) {
        if (object[key][i] == 10) {
            newArr.push(object[key][i]);
        }
    }
    return newArr;
}
let obj = {
    key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]