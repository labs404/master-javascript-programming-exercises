function removeFromFrontOfNew(arr) {
    // your code here
    newArr = arr.slice(1)
    return newArr;    
}


let array = [1, 2, 3];
let newArr = array;
let output = removeFromFrontOfNew(array);
console.log(output); // --> [2, 3]
console.log(array); // --> [1, 2, 3]
