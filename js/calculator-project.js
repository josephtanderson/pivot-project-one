const allClear = document.getElementById("clear");
const numbers = document.querySelectorAll("[number-btn]");
const operators = document.querySelectorAll("[operator-btn]");
const del = document.querySelector("[del-btn]");
const equals = document.getElementById("equals");
const prev = document.getElementById("previous");
const curr = document.getElementById("current");

class Calculator{
    operator = "";
    previousOperator = "";
    previousOutput= "";
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
            this.previousOutput = "";
            this.previousOperation = "";
        } else {
            this.currentOperandTextEle = "";
        }
    }
    delete(){
        if (this.currentOperandTextEle === "" && this.operator) {
            this.operator = "";
            this.currentOperandTextEle = this.previousOperand.toString() + "/";
            this.previousOperand = "";
            this.previousOperandTextEle = "";
        }
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
    compute()
    {if (!this.operator && this.currentOperandTextEle === "") {
        this.currentOperandTextEle = this.currentOperand.toString();
        this.operator = this.previousOperator;
    }
    this.currentOperand = Number(this.currentOperandTextEle);
    if (this.operator === "+") {
        this.previousOperand = this.previousOperand + this.currentOperand;
    } else if (this.operator === "-") {
        this.previousOperand = this.previousOperand - this.currentOperand;
    } else if (this.operator === "x") {
        this.previousOperand = this.previousOperand * this.currentOperand;
    } else if (this.operator === "÷") {
        this.previousOperand = this.previousOperand / this.currentOperand;
    } else {
        this.previousOperand = this.currentOperand;
    }
    // switch (this.operator) {
    //     case "+":
    //         this.previousOperand = this.previousOperand + this.currentOperand;
    //         break;
    //     case "-":
    //         this.previousOperand = this.previousOperand - this.currentOperand;
    //         break;
    //     case "x":
    //         this.previousOperand = this.previousOperand * this.currentOperand;
    //         break;
    //     case "÷":
    //         this.previousOperand = this.previousOperand / this.currentOperand;
    //         break;
    //     default:
    //         this.previousOperand = this.currentOperand;
    // }
    this.previousOutput = this.previousOperand.toString();
    this.currentOperandTextEle = "";
    this.previousOperator = this.operator;
    this.operator = "";
    }
}

const calcExample = new Calculator();

function updateDisplay() {
    prev.textContent = calcExample.previousOutput;
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