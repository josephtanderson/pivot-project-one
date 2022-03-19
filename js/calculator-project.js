/*
const allClear = document.getElementById("all-clear");
const del = document.getElementById("delete");
const divide = document.getElementById("divide");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const add = document.getElementById("add");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const subtract = document.getElementById("subtract");
const decimal = document.getElementById("decimal");
const zero = document.getElementById("zero");
const equals = document.getElementById("equals");
*/
const prev = document.getElementById("previous");
const curr = document.getElementById("current");


class Calculator{
    operation = "";
    operator = "";
    previousOperand = "";
    currentOperand = "";
    constructor(previousOperandTextEle = "", currentOperandTextEle = "") {
        this.previousOperandTextEle = previousOperandTextEle;
        this.currentOperandTextEle = currentOperandTextEle;
    }
    clear() {
        if (this.currentOperandTextEle === "") {
            this.previousOperandTextEle = "";
            this.currentOperandTextEle = "";
            this.currentOperand = "";
            this.previousOperand = "";
            this.operator = "";
        } else {
            this.currentOperandTextEle = "";
        }
    }

    delete(){
        this.currentOperandTextEle = this.currentOperandTextEle.slice(0, this.currentOperandTextEle.length-1)
    }
    appendNumber(num){
        if (num === "." && this.currentOperandTextEle.includes(".")) {
        } else {
            this.currentOperandTextEle += num;
        }
    }
    chooseOperation(operator){
            this.previousOperand = Number(this.currentOperandTextEle);
            console.log(this.previousOperand, "Line 59")
            this.currentOperandTextEle = "";
            this.operator = operator;
    }
    compute(){
        this.currentOperand = Number(this.currentOperandTextEle);
        switch (this.operator) {
            case "add":
                this.previousOperandTextEle = this.previousOperand + this.currentOperand;
                break;
            case "subtract":
                this.previousOperandTextEle = this.previousOperand - this.currentOperand;
                break;
            case "multiply":
                this.previousOperandTextEle = (this.previousOperand * this.currentOperand);
                this.operation = `${this.previousOperand} x ${this.currentOperand} =`
                this.currentOperandTextEle = "";
                break;
            case "divide":
                this.previousOperandTextEle = this.previousOperand / this.currentOperand;
                break;
        }
        
    }
}


const calcExample = new Calculator();

calcExample.appendNumber("4");
calcExample.appendNumber(".");
calcExample.appendNumber("2");
calcExample.appendNumber(".");
calcExample.appendNumber("2");
calcExample.chooseOperation("multiply");
calcExample.appendNumber("1");
calcExample.appendNumber("9");
calcExample.compute();

console.log(calcExample);

prev.textContent = calcExample.previousOperandTextEle.toString();
curr.textContent = calcExample.currentOperandTextEle.toString();
if (!calcExample.currentOperandTextEle) {
    prev.textContent = calcExample.operation;
    curr.textContent = calcExample.previousOperandTextEle.toString();
    if (!calcExample.previousOperandTextEle) {
        prev.textContent = "";
        curr.textContent = "0";
    }
}

