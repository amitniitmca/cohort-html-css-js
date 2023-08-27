function sample(){
    let letA = 10;
    var varA = 20;
    console.log('===BEFORE BLOCK====');
    console.log('LET A = '+letA);
    console.log('VAR A = '+varA);
    if(true){
        let letB = 30;
        var varB = 40;
        console.log('===INSIDE BLOCK====');
        console.log('LET A = '+letA);
        console.log('VAR A = '+varA);
        console.log('LET B = '+letB);
        console.log('VAR B = '+varB);
    }
    console.log('===OUTSIDE BLOCK====');
    console.log('LET A = '+letA);
    console.log('VAR A = '+varA);
    console.log('VAR B = '+varB); 
    console.log('LET B = '+letB);
}

sample();
