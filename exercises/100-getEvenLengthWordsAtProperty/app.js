function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {return []};
    // let newArr = [];
    // for (let i = 0; i < obj[key].length; i++) {
    //   if (obj[key][i].length % 2 == 0) {
    //     newArr.push(obj[key][i]);
    //   }
    // }
    // return newArr;
    return obj[key].filter(word => word.length % 2 == 0);
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
