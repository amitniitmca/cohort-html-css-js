let myobj = {
    prop1 : 'value1',
    prop2 : 'value2'
};

console.log(myobj);

let student = {
    rollNo : 1,
    name : 'Amit',
    standard : 10,
    age : 16,
    male : true,
    female : false
};

console.log(student.name);
console.log(student.age);

delete student.age;
student.contact = '123456789';
console.log(student);