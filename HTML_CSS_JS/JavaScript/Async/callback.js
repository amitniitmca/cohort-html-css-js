function showResult(res){
    console.log("Result = "+res);
}

function showAlert(res){
    alert("Result = "+res);
}

function add(num1, num2, fun){
    let result = num1 + num2;
    fun(result);
}

add(10, 20, showAlert);

