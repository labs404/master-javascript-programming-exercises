// Write your function here
function removeElement(array,discarder) {
    // newArr = [];
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] != discarder) {
    //         newArr.push(array[i]);
    //     }
    // }
    // return newArr;
    return array.filter((i) => i !== discarder);
};

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]