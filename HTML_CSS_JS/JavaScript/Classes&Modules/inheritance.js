class Employee{
    constructor(eCode, eName, sal){
        this.empCode = eCode;
        this.empName = eName;
        this.salary = sal;
    }
    displayConsole(){
        console.log("Employee Code : "+this.empCode);
        console.log("Employee Name : "+this.empName);
        console.log("Salary : "+this.salary);
    }
}

class TeachingStaff extends Employee{
    constructor(eCode, eName, sal, subject){
        super(eCode, eName, sal);
        this.subject = subject;
    }
    displayConsole(){
        super.displayConsole();
        console.log("Subject : "+this.subject);
    }
}

class NonTeachingStaff extends Employee{
    constructor(eCode, eName, sal, commission){
        super(eCode, eName, sal);
        this.commission = commission;
    }
    displayConsole(){
        super.displayConsole();
        console.log("Commission : "+this.commission);
    }
}

let tsObj = new TeachingStaff("E101", "Amit", 25000, "JavaScript");
tsObj.displayConsole();
console.log("-------------");
let ntsObj = new NonTeachingStaff("E102", "Eli", 35000, 500);
ntsObj.displayConsole();