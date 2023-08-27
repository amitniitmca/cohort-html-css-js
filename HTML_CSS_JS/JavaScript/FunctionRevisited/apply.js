let employee = {
    firstName : "Dwayne",
    lastName : "Johnson",
    basicSalary : 50000,
    tax : 0.15,
    fullName : function () {
        return this.firstName+" "+this.lastName ;
    },
    netSalary : function (){
        return this.basicSalary - (this.basicSalary * this.tax);
    } 
};

let emp1 = {
    firstName : "Brad",
    lastName : "Pitt"
}

let emp2 = {
    basicSalary : 35000,
    tax : 0.10,
}

console.log(employee.fullName.apply(emp1));
console.log(employee.fullName.apply(emp2));
console.log(employee.netSalary.apply(emp2));
console.log(employee.netSalary.apply(emp1));
