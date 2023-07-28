function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let longestWord = "";
    if (word1.length > longestWord.length) {longestWord = word1}
    if (word2.length > longestWord.length) {longestWord = word2}
    if (word3.length > longestWord.length) {longestWord = word3}
    return longestWord;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
