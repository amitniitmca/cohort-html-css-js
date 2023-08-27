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
    firstName : "Shahrukh",
    lastName : "Khan"
}

let emp3 = {
    basicSalary : 35000,
    tax : 0.10,
}

let emp4 = {
    basicSalary : 75000,
    tax : 0.40,
}

employee.fullName.call(emp1, 50, "US");
employee.fullName.apply(emp2, [56, "India"]);

let hra = 100, ta = 50, da = 200;

employee.netSalary.call(emp3, hra, ta, da);
employee.netSalary.apply(emp4, [hra, ta, da]);