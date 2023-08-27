let arr = [15, 10, 25, 30, 45, 50];
//          0   1   2   3   4   5
//         -6  -5  -4  -3  -2  -1

let newarr1 = arr.slice(1, 3);
let newarr2 = arr.slice(1, 6);
let newarr3 = arr.slice(1, 7);
let newarr4 = arr.slice(-7, -4);

console.log(arr);
console.log(newarr1);
console.log(newarr2);
console.log(newarr3);
console.log(newarr4);