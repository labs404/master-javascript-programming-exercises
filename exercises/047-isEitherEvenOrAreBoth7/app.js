function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    return (
        (num1 == 7 && num2 == 7) || 
        (num1 % 2 == 0 || num2 % 2 == 0))
}

let output = isEitherEvenOrAreBoth7(2, 3);
console.log(output);