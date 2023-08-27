function tenTimes(item){
    return item * 10;
}

let myarray1 = [10, 20, -30, 40, 50];

let myarray2 = myarray1.map(tenTimes);

console.log(myarray1);
console.log(myarray2);