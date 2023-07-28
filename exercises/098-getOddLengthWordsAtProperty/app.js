// Write your function here
function getOddLengthWordsAtProperty(obj,key) {
    let x = obj[key];
    let newA = [];
    if (!x || x.length == 0 || !Array.isArray(x)) {return []};
    x.forEach(e => {
        if (e.length % 2 != 0) {
            newA.push(e);
        }
    })
    return newA;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']