let comp = document.querySelector("ul");
console.log(comp.id);
console.log(comp.list);

let obj = {
    age : 35,
    gender : "Male"
};

comp.myObject = obj;

console.log(comp.myObject);

let mydiv = document.getElementById("mydiv");

mydiv.innerHTML = JSON.stringify(obj);