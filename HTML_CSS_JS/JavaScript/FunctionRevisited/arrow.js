let add = (num1, num2) => num1+num2;
let subtract = (num1, num2) => num1-num2;
let multiply = (num1, num2) => num1*num2;
let divide = (num1, num2) => num1/num2;

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(100, 20));

setTimeout( () => console.log("Hello") , 2000);


let arrayAverage = (numbers) => {
    let sum = 0;
    for(let temp of numbers){
        sum += temp;
    }
    let avg = sum / numbers.length;
    return avg;
}

console.log(arrayAverage([10, 20, 30, 40, 50, 60]));