let a, b, result;
let activeInput;

window.onload = function () {
    a = document.getElementById("num1");
    b = document.getElementById("num2");
    result = document.getElementById("res");

    activeInput = a; 
};

function setActive(input){
    activeInput = input;
}

function putNumber(num){
    activeInput.value += num;
}

function add(){
    result.innerText = parseFloat(a.value) + parseFloat(b.value);
}

function sub(){
    result.innerText = parseFloat(a.value) - parseFloat(b.value);
}

function multiply(){
    result.innerText = parseFloat(a.value) * parseFloat(b.value);
}

function divi(){
    let m = parseFloat(b.value);
    if(m === 0){
        result.innerText = "Division by zero is not possible";
    } else {
        result.innerText = parseFloat(a.value) / m;
    }
}

function mod(){
    result.innerText = parseFloat(a.value) % parseFloat(b.value);
}

function sq(){
    result.innerText = parseFloat(a.value) ** 2;
}

 
    




