class Employee{
    static myvar = 10;
    constructor(eCode, eName){
        this.empCode = eCode;
        this.empName = eName;
    }
    displayConsole(){
        console.log("Employee Code : "+this.empCode);
        console.log("Employee Name : "+this.empName);
    }
    static myMethod(sample){
        console.log("Hello Static : "+sample+", "+this.myvar);
    }
}


let obj = new Employee("1101", "Amit");
obj.displayConsole();

Employee.myMethod(100);