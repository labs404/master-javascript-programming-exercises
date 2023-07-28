function countCharacter(str, char) {
    // your code here
    let occurrences = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            occurrences += 1;
        }
    };
    return occurrences;
};

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3