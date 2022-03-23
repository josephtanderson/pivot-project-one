const allClear = document.getElementById("clear");
const numbers = document.querySelectorAll("[number-btn]");
const operators = document.querySelectorAll("[operator-btn]");
const del = document.querySelector("[del-btn]");
const equals = document.getElementById("equals");
const prev = document.getElementById("previous");
const curr = document.getElementById("current");

class Calculator{
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
        this.currentOperandTextEle = this.currentOperandTextEle.slice(0, -1);
    }
    appendNumber(num){
        if (!this.operator && this.currentOperandTextEle === "") {
            this.clear();
        }
        if (num === "." && this.currentOperandTextEle.includes(".")) {
        } else {
            this.currentOperandTextEle += num;
        }
    }
    chooseOperation(operator){
        if (this.operator) {this.compute()};
        if (this.currentOperandTextEle) {
                this.previousOperand = Number(this.currentOperandTextEle);
                this.currentOperandTextEle = "";
            }
        this.operator = operator;
    }
    compute(){
        this.currentOperand = Number(this.currentOperandTextEle);
        switch (this.operator) {
            case "+":
                this.previousOperand = this.previousOperand + this.currentOperand;
                break;
            case "-":
                this.previousOperand = this.previousOperand - this.currentOperand;
                break;
            case "x":
                this.previousOperand = this.previousOperand * this.currentOperand;
                break;
            case "÷":
                this.previousOperand = this.previousOperand / this.currentOperand;
                break;
            default:
                this.previousOperand = this.currentOperand;
        }
        this.previousOperandTextEle = this.previousOperand.toString();
        this.currentOperandTextEle = "";
        this.currentOperand = "";
        this.operator = "";
    }
}

const calcExample = new Calculator();

function updateDisplay() {
    prev.textContent = calcExample.previousOperandTextEle.toString()
    curr.textContent = calcExample.previousOperand.toString() +" "+calcExample.operator+" "+calcExample.currentOperandTextEle.toString();
};
updateDisplay();

for (let i=0;i<numbers.length; i++) {
    numbers.item(i).addEventListener('click', (event) => {
        calcExample.appendNumber(event.target.innerText);
        updateDisplay();
    });
};
for (let i=0; i<operators.length; i++) {
    operators.item(i).addEventListener('click', (event) => {
        calcExample.chooseOperation(event.target.innerText);
        updateDisplay();
    });
};
allClear.addEventListener('click', (event) => {
    calcExample.clear();
    updateDisplay();
});
del.addEventListener('click', (event) => {
    calcExample.delete();
    updateDisplay();
});
equals.addEventListener('click', (event) => {
    calcExample.compute();
    updateDisplay();
});

curr.addEventListener('click', (event) => {
    console.log(calcExample);
})