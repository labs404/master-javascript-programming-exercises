// Write your function here
function getElementsLessThan100AtProperty(object, keyValue) {
    let newArr = [];
    if (!object[keyValue] || object[keyValue.length == 0 || !Array.isArray(object[keyValue])]) {return []};

    for (let i = 0; i < object[keyValue].length; i++) {
        if (object[keyValue][i] < 100) {
            newArr.push(object[keyValue][i])
        }
    }
    return newArr;
    // object[keyValue].forEach(element => { if (element < 100)
    //     newArr.push(element);        
    // });
    // return newArr;
}
let obj = {
    key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]