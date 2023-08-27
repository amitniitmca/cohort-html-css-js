function showTime(){
    let mydate = new Date();
    let comp = document.getElementById("mydiv");
    
    let hr = mydate.getHours();
    let min = mydate.getMinutes();
    let sec = mydate.getSeconds();

    comp.innerHTML = `<H1> ${hr} : ${min} : ${sec} </H1>`;
}

setInterval(showTime , 1000);

