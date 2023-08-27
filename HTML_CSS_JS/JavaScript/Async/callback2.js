function myfun(){
    let comp = document.getElementById("mydiv");
    comp.innerHTML = "HELLO";
}

setTimeout(myfun , 3000);

// function getNegatives(numbers, callback){
//     let arr = [];
//     for(let num of numbers){
//         if(callback(num)){
//             arr.push(num);
//         }
//     }
//     return arr;
// }

// let arr1 = [10, -5, -9, 20, -8, 0, -7];

// let newarr = getNegatives(arr1, (x) => x < 0);

// let comp = document.getElementById("mydiv");
// comp.innerHTML = newarr;