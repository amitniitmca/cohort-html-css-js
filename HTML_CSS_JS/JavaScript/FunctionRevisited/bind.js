let employee = {
    firstName : "Dwayne",
    lastName : "Johnson",
    basicSalary : 50000,
    tax : 0.15,
    fullName : function (age, country) {
        console.log(this.firstName+" "+this.lastName);
        console.log(this.firstName+" is "+age+" years old");
        console.log(this.firstName+" is living in "+country);
    },
    netSalary : function (hra, ta, da){
        let net = this.basicSalary - (this.basicSalary * this.tax);
        net = net + hra + ta + da;
        console.log("HRA : $"+hra);
        console.log("TA : $"+ta);
        console.log("DA : $"+da);
        console.log("Net Salary : $"+net);
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


let emp1Fun = employee.fullName.bind(emp1, 50, "US");
emp1Fun();

let emp2Fun = employee.netSalary.bind(emp2, 100, 100, 100);
emp2Fun();