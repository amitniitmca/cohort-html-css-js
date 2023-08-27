function sayHelloTo(msg){
    return `Hello ${msg}!`;
}

function sum(a, b){
    console.log(a+b);
}

let var1 = sayHelloTo('Amit');
console.log(var1);

console.log(sayHelloTo('Yoll'));

let add = sum;

sum(10, 20);
add(100, 200);