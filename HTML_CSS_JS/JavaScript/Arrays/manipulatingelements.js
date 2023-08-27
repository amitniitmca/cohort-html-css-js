let arr = [15, 10, 25, 30, 45, 50];
console.log(arr);

let ret = arr.push(100);
console.log(arr);
console.log('Returning value on pushing 100 : '+ret);

ret = arr.pop();
console.log(arr);
console.log('Returning value on popping : '+ret);

ret = arr.shift();
console.log(arr);
console.log('Returning value on shift : '+ret);

ret = arr.unshift(100);
console.log(arr);
console.log('Returning value on shift : '+ret);
