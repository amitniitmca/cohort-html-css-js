function display(text){
    let comp = document.getElementById("mydiv");
    comp.innerHTML = text;
}

let obj = new Promise(function(myRes, myRej){
    let num = 10;

    if(num > 0){
        myRes("Success");
    }
    else{
        myRej("Error");
    }
});

obj.then(
    function(val1){ display(val1)},
    function(val2){ display(val2)}
)