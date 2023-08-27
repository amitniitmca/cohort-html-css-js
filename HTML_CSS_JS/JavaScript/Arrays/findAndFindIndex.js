function findForNegative(element){
    return element < 0;
}

let myarray1 = [10, 20, -30, -40, 50];

console.log(myarray1.find(findForNegative));
console.log(myarray1.findIndex(findForNegative));