class Employee{
    empCode;
    empName;

    set eCode(value){
        this.empCode = "EMP-"+value;
    }

    get eCode(){
        return this.empCode;
    }

    set eName(value){
        this.empName = value;
    }

    get eName(){
        return this.empName;
    }
}


let obj = new Employee();
obj.eCode = "1101";
obj.eName = "Amit";
console.log(obj.eCode);
console.log(obj.eName);