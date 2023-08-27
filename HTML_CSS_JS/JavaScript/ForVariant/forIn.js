let employee = {
    code : "EMP101",
    name : "Betul",
    salary : 100000
};

for(let temp in employee){
    console.log(temp+" => "+employee[temp]);
}

let myarray = [10, 20, 30, 40, 50, 60, 70];

for(let temp in myarray){
    console.log(temp+" => "+myarray[temp]);
}