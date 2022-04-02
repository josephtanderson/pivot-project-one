const allClear = document.getElementById("clear");
const numbers = document.querySelectorAll("[number-btn]");
const operators = document.querySelectorAll("[operator-btn]");
const square = document.getElementById("square");
const squareRoot = document.getElementById("square-root");
const del = document.querySelector("[del-btn]");
const equals = document.getElementById("equals");
const prev = document.getElementById("previous");
const curr = document.getElementById("current");

const calculator = (() => {
    let operator = "";
    let previousOperator = "";
    let previousOutput= "";
    let previousOperand = "";
    let currentOperand = "";
    let previousOperandTextEle = "";
    let currentOperandTextEle = "";
    const clear = () => {
        if (currentOperandTextEle === "") {
            previousOperandTextEle = "";
            currentOperandTextEle = "";
            currentOperand = "";
            previousOperand = "";
            operator = "";
            previousOutput = "";
            previousOperation = "";
        } else {
            currentOperandTextEle = "";
        }
    };
    const remove = () => {
        if (currentOperandTextEle === "" && operator) {
            operator = "";
            currentOperandTextEle = previousOperand.toString() + "/";
            previousOperand = "";
            previousOperandTextEle = "";
        }
        currentOperandTextEle = currentOperandTextEle.slice(0, -1);
    }
    const appendNumber = (num) => {
        if (!operator && currentOperandTextEle === "") {
            clear();
        }
        if (num === "." && currentOperandTextEle.includes(".")) {
        } else {
            currentOperandTextEle += num;
            console.log(currentOperandTextEle)
        }
    }
    const chooseOperation = (op) => {
        if (operator) {compute()};
        if (currentOperandTextEle) {
                previousOperand = Number(currentOperandTextEle);
                currentOperandTextEle = "";
            }
        operator = op;
    }
    const square = () => {
        if (operator) {compute()};
        if (currentOperandTextEle) {
                previousOperand = Number(currentOperandTextEle);
                currentOperandTextEle = "";
            }
        currentOperandTextEle = previousOperand;
        operator = "x";
        compute();
    }
    const sqRoot = () => {
        if (operator) {compute()};
        if (currentOperandTextEle) {
                previousOperand = Number(currentOperandTextEle);
                currentOperandTextEle = "";
            }
        previousOperand = Math.sqrt(previousOperand);
        previousOutput = previousOperand.toString();
        currentOperandTextEle = "";
        previousOperator = operator;
        operator = "";
    }
    const compute = () => {
    if (!operator && currentOperandTextEle === "") {
        if (!previousOperand) {return}
        currentOperandTextEle = currentOperand.toString();
        operator = previousOperator;
    }
    currentOperand = Number(currentOperandTextEle);
    // if (operator === "+") {
    //     previousOperand = previousOperand + currentOperand;
    // } else if (operator === "-") {
    //     previousOperand = previousOperand - currentOperand;
    // } else if (operator === "x") {
    //     previousOperand = previousOperand * currentOperand;
    // } else if (operator === "÷") {
    //     previousOperand = previousOperand / currentOperand;
    // } else {
    //     previousOperand = currentOperand;
    // }
    switch (operator) {
        case "+":
            previousOperand = previousOperand + currentOperand;
            break;
        case "-":
            previousOperand = previousOperand - currentOperand;
            break;
        case "x":
            previousOperand = previousOperand * currentOperand;
            break;
        case "÷":
            previousOperand = previousOperand / currentOperand;
            break;
        default:
            previousOperand = currentOperand;
    }
    previousOutput = previousOperand.toString();
    currentOperandTextEle = "";
    previousOperator = operator;
    operator = "";
    }

    const updateDisplay = () => {
        prev.textContent = previousOutput;
        curr.textContent = previousOperand.toString() +" "+operator+" "+currentOperandTextEle;
    };


    return { updateDisplay, appendNumber, chooseOperation, clear, remove, compute, square, sqRoot }
})();


calculator.updateDisplay();

for (let i=0;i<numbers.length; i++) {
    numbers.item(i).addEventListener('click', (event) => {
        calculator.appendNumber(event.target.innerText);
        calculator.updateDisplay();
    });
};
for (let i=0; i<operators.length; i++) {
    operators.item(i).addEventListener('click', (event) => {
        calculator.chooseOperation(event.target.innerText);
        calculator.updateDisplay();
    });
};
square.addEventListener('click', (event)=>{
    calculator.square();
    calculator.updateDisplay();
})

squareRoot.addEventListener('click', (event)=>{
    calculator.sqRoot();
    calculator.updateDisplay();
})
allClear.addEventListener('click', (event) => {
    calculator.clear();
    calculator.updateDisplay();
});
del.addEventListener('click', (event) => {
    calculator.remove();
    calculator.updateDisplay();
});
equals.addEventListener('click', (event) => {
    calculator.compute();
    calculator.updateDisplay();
});


curr.addEventListener('click', (event) => {
    console.log(calculator);
})