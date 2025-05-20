function add(addend1, addend2){
    return addend1 + addend2;
}

function subtract(minuend, subtrahend){
    return minuend - subtrahend;
}

function multiply(factor1, factor2){
    return factor1 * factor2;
}

function divide(dividend, divisor){
    return dividend / divisor;
}

function operate(operand1, operand2, operator){
    switch (operator){
        case "+":
            return add(operand1, operand2);

        case "-":
            return subtract(operand1, operand2);
        
        case "*":
            return multiply(operand1, operand2);

        case "/":
            return divide(operand1, operand2);

    }
}

function clear(display){
    operand1 = NaN;
    operand2 = NaN;
    operator = "";

    const displays = display.children;
    for (let i = 0; i < displays.length; i++){
        displays[i].textContent = "";
    }
}

let operand1 = NaN;
let operand2 = NaN;
let operator = "";

let operatorPressed = false;

const display = document.querySelector(".display");

document.querySelector(".clear").addEventListener("click", () => {
    clear(display);
});

document.querySelectorAll("button.number").forEach(button => {
    button.addEventListener("click", function(e) {
        display.querySelector(".numbers").textContent += e.target.textContent;
    });
});