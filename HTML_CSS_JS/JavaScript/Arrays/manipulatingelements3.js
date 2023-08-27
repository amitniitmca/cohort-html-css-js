let arr1 = [15, 10, 25, 30, 45, 50];
let arr2 = [15, 10, 25, 30, 45, 50];
let arr3 = [15, 10, 25, 30, 45, 50];
let arr4 = [15, 10, 25, 30, 45, 50];
let arr5 = [15, 10, 25, 30, 45, 50];
//          0   1   2   3   4   5
//         -6  -5  -4  -3  -2  -1

let ret1 = arr1.splice(2, 3);
console.log(arr1);
console.log(ret1);

let ret2 = arr2.splice(2, 6);
console.log(arr2);
console.log(ret2);

let ret3 = arr3.splice(-2, 6);
console.log(arr3);
console.log(ret3);

let ret4 = arr4.splice(-6, 2);
console.log(arr4);
console.log(ret4);

let ret5 = arr5.splice(2, 0, "Amit", "Albert");
console.log(arr5);
console.log(ret5);