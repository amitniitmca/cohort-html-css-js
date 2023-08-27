function myfun(item, i, arr){
    console.log(item+', '+i+', '+arr);
}

function tenTimes(item, i, arr){
    arr[i] = item * 10;
}

let myarray1 = [10, 20, -30, 40, 50];

console.log(myarray1);

myarray1.forEach(tenTimes);

console.log(myarray1);