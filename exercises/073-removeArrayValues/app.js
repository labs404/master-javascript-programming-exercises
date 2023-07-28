function removeArrayValues(obj) {
    // your code here
    for (key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
};
removeArrayValues(obj);
console.log(obj);