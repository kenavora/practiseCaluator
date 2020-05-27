
function input(getValue) {
    document.getElementById("displaySteps").innerHTML += getValue;
    var firstLine= document.getElementById("displaySteps").innerHTML;
    var typed=  document.getElementById("display").innerHTML ;
    //if(getValue==="+"||getValue==="-"||getValue==="*"||getValue==="/"){
        //document.getElementById("display").innHTML= typed;
    //}
     if (firstLine.endsWith("+")||firstLine.endsWith("-")||firstLine.endsWith("/")||firstLine.endsWith("*")){
        document.getElementById("display").innerHTML= typed
    }
else{
    document.getElementById("display").innerHTML= typed + getValue}
}

function operators(sign) {
    decimalDisable(false);
    operationOperators(sign);
    var expression = document.getElementById("displaySteps").innerHTML;
    var answer = eval(expression);
    document.getElementById("display").innerHTML = answer; 
    //input(sign);   
}

function operationOperators(value) {
    document.getElementById("displaySteps").innerHTML += value
}
    /*var x= document.getElementById("displaySteps").innerHTML;
    var typed=  document.getElementById("display").innerHTML ;
    if(getValue==="+"||getValue==="-"||getValue==="*"||getValue==="/"){
        document.getElementById("display").innHTML= typed;
    }
    else if (getValue.startsWith ("+")||getValue.startsWith("-")||getValue.startsWith("/")||getValue.startsWith("*")){
        document.getElementById("display").innerHTML= ;
    }
else{
    document.getElementById("display").innerHTML= typed + getValue}*/



function decimal() {
    decimalDisable(true);
    document.getElementById("displaySteps").innerHTML += ".";
}

function decimalDisable(value) {
    document.getElementById("decimal").disabled = value;
}

function solve() {
    var expression = document.getElementById("displaySteps").innerHTML;
    var answer = eval(expression);
    document.getElementById("displaySteps").innerHTML = expression;
    document.getElementById("display").innerHTML = answer;
}

function clearAll() {
    document.getElementById("displaySteps").innerHTML = " ";
    document.getElementById("display").innerHTML = " ";
    decimalDisable(false);
}