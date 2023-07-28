// Write your function here
function keep(array, itemToKeep) {
    newArr =[]
    for (let i = 0; i < array.length; i++) {
        if (array[i] == itemToKeep) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]