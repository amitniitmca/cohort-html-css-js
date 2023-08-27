let listItems = document.querySelectorAll("li");

function changeMouseIn(index){
    listItems[index].style.backgroundColor = 'black';
    listItems[index].style.color = 'white';
}

function changeMouseOut(index){
    listItems[index].style.backgroundColor = 'white';
    listItems[index].style.color = 'black';
}

