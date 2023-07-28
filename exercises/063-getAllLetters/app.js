function getAllLetters(str) {
    // your code here
    let lettersArray = [];
    for (let i = 0; i < str.length; i++) {
        lettersArray.push(str[i]);
    };
    return lettersArray;    
};

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
