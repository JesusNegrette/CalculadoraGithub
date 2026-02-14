let currentInput = '0';
let previousInput = '';
let selectedOperator = null;
let shouldResetScreen = false;

const currentScreen = document.getElementById('current-screen');
const operationScreen = document.getElementById('operation-screen');

function updateDisplay() {
    currentScreen.innerText = currentInput;
    if (selectedOperator) {
        operationScreen.innerText = `${previousInput} ${selectedOperator}`;
    } else {
        operationScreen.innerText = '';
    }
}

function appendNumber(num) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = num;
        shouldResetScreen = false;
    } else {
        if (num === '.' && currentInput.includes('.')) return;
        currentInput += num;
    }
    updateDisplay();
}

function allClear() {
    currentInput = '0';
    previousInput = '';
    selectedOperator = null;
    updateDisplay();
}

function deleteChar() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function setOperator(op) {
    if (selectedOperator !== null) calculate();
    previousInput = currentInput;
    selectedOperator = op;
    shouldResetScreen = true;
    updateDisplay();
}

function calculate() {
    if (selectedOperator === null || shouldResetScreen) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (selectedOperator) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = current === 0 ? "Error" : prev / current; break;
        case '%': result = prev % current; break;
        case '^': result = Math.pow(prev, current); break;
        default: return;
    }

    currentInput = result.toString();
    selectedOperator = null;
    previousInput = '';
    shouldResetScreen = true;
    updateDisplay();
}

function scientific(type) {
    let val = parseFloat(currentInput);
    let res;

    switch(type) {
        case 'sqrt': res = Math.sqrt(val); break;
        case 'cos': res = Math.cos(val * (Math.PI / 180)); break;
        case 'tan': res = Math.tan(val * (Math.PI / 180)); break;
    }

    currentInput = parseFloat(res.toFixed(8)).toString();
    shouldResetScreen = true;
    updateDisplay();
}