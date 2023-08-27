async function display(){
    let obj = new Promise( function(resolve) {
        setTimeout(function(){resolve("I love JS")}, 2000);
    });

    let comp = document.getElementById("mydiv");
    comp.innerHTML = await obj;
}


display();