let a = true;
let b = false;

console.log(a & b);
console.log(a | b);

let c = 2;
let d = 5;

// 2 = 010
// 5 = 101
// & = 000 = 0

// 2 = 010
// 5 = 101
// | = 111 = 7

console.log(c & d);
console.log(c | d);


// For all the non zeros JavaScript will treat them as true
console.log(!2);
console.log(!-5);
console.log(!0);
