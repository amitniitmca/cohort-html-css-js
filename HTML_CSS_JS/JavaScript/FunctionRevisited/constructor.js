let add = new Function('num1', 'num2', 'return num1+num2');
let subtract = new Function('num1', 'num2', 'return num1-num2');
let quotient = new Function('num1', 'num2', 'return num1/num2');
let product = new Function('num1', 'num2', 'return num1*num2');
let remainder = new Function('num1', 'num2', 'return num1%num2');

console.log(add(2, 10));
console.log(subtract(2, 10));
console.log(product(2, 10));
console.log(quotient(10, 2));
console.log(remainder(10, 2));