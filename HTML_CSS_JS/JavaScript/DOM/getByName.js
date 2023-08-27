let heads = document.getElementsByName("head");
const newText = "Launch your new IT career!";
const oldText = "Welcome to Yoll Academy!";

function changeToNewText(){
    heads[0].innerText = newText;
    heads[0].style.backgroundColor = 'red';
    heads[0].style.color = 'yellow';
}

function changeToOldText(){
    heads[0].innerText = oldText;
    heads[0].style.backgroundColor = 'yellow';
    heads[0].style.color = 'red';
}