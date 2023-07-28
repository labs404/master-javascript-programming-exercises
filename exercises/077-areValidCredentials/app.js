// Write your function here
function areValidCredentials(name, password) {
    return (name.length > 2 && password.length > 7);
}

let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true