let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
    let keyCount = 0;
    for (key in obj) {
        keyCount += 1;
    }
    return keyCount;
   
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
