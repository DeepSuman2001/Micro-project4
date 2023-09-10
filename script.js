let outputscreen = document.getElementById("disp");

function getInput(num){
    outputscreen.value += num;
}

function Calculate(){
        outputscreen.value=eval(outputscreen.value);
}

function reset(){
    outputscreen.value=''   
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}