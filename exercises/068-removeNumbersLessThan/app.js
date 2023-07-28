let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (key in obj) {
        if (obj[key] < num) {
            delete obj[key];
        }
    }
}

removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }