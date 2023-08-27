let employee = {
    firstName : "Dwayne",
    lastName : "Johnson",
    fullName : function () {
        let comp = document.getElementById("mydiv");
        comp.innerHTML = this.firstName+" "+this.lastName;
    }
};

let display = employee.fullName.bind(employee);

setTimeout(display, 3000); // function callback