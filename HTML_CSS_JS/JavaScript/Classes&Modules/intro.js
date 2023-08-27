class Employee{
    constructor(eCode, eName){
        this.empCode = eCode;
        this.empName = eName;
    }
    displayConsole(){
        console.log("Employee Code : "+this.empCode);
        console.log("Employee Name : "+this.empName);
    }
    displayBody(comp){
        let message = "<p> Employee Code : "+this.empCode+"<BR>";
        message += "Employee Name : "+this.empName+"</p>";
        comp.innerHTML = message;
    }
}

let obj1 = new Employee("E100", "Amit Kumar");
let obj2 = new Employee("E101", "Albert Shamah");

obj1.displayConsole();
obj2.displayConsole();

let comp1 = document.getElementById("detail1");
let comp2 = document.getElementById("detail2");

obj1.displayBody(comp1);
obj2.displayBody(comp2);