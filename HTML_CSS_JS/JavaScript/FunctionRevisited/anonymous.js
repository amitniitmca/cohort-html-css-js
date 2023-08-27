let myarray = [10, 20, -50, 40, -60];

let res = myarray.find(function(item){ return item < 0; });

console.log(res);

setTimeout(function(){ console.log("Hello") }, 5000);