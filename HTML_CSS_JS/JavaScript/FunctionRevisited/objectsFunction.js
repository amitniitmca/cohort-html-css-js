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

console.log(employee);

console.log(employee.fullName());
console.log(employee.netSalary());