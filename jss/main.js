/***
 * Javascript for the calculator written by Kasim Abubakar Jajere
 */

document.getElementById("entered-command").innerHTML = 0;
document.getElementById("results-panel").innerHTML = 0;



function Num(val) {

    var enteredCommand =  document.getElementById("entered-command").innerHTML;
    
    if(enteredCommand == 0) {
        document.getElementById("entered-command").innerHTML = val;
    }else {
    document.getElementById("entered-command").innerHTML += val; 

    }
}


//equal button
function btnEqual() {

    //Display the result on the panel
    var enteredCommand =  document.getElementById("entered-command").innerHTML;

    document.getElementById("results-panel").innerHTML = eval(enteredCommand);
}


//Delete entered command
function btnDel() {
    document.getElementById("entered-command").innerHTML = 0;
    document.getElementById("results-panel").innerHTML = 0;
}