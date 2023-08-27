function filterForPositive(element){
    return element > 0;
}

let myarray1 = [10, 20, -30, -40, 50];

let myarray2 = myarray1.filter(filterForPositive);

console.log(myarray1);
console.log(myarray2);