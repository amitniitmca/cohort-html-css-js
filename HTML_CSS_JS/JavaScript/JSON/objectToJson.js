let student = {
    name : 'Amit Kumar',
    age : 35,
    gender : 'Male',
    languages : ['English', 'French', 'Spanish'],
    havingJob : false,
    address: null
};


let jsonData = JSON.stringify(student);

console.log(student);
console.log(jsonData);