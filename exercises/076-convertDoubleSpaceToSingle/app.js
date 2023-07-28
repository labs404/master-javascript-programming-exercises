function convertDoubleSpaceToSingle(str) {
    // your code here
    words = str.replaceAll("  ", " ");
    // words = str.split("  ");
    return words;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
