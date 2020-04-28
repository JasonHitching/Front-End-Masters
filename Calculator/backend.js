let buffer = "0";
let currentSum = 0;
let previousOperator = null;
const screenDoc = document.querySelector(".screen");

/**
 * Determine if the value of the pressed button is numeric or a symbol.
 * @param {value-of-button-pressed} buttonVal 
 */
function buttonClick(buttonVal) {
  if (isNaN(parseInt(buttonVal))) {
    processSymbol(buttonVal);
  } else {
    processNumber(buttonVal);
  }
  render();
}

function processNumber(num) {
  if (buffer === "0") {
    buffer = num;
  } else {
    buffer += num;
  }
}

function doMath(symbol) {
  if(buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);
  if(currentSum === 0) {
    currentSum = intBuffer;
  } else {
    doOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

/**
 * Perform selected operation on the current sum value.
 * @param {math-operator} value 
 */
function doOperation(value) {
    switch (previousOperator) {
      case "%":
        currentSum /= value;
        break;
      case "x":
        currentSum *= value;
        break;
      case "+":
        currentSum += value;
        break;
      case "-":
        currentSum -= value;
        break;
    }
}

/**
 * Filter the symbol button that was pressed.
 * @param {button-symbol} symbol 
 */
function processSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      currentSum = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      doOperation(parseInt(buffer));
      previousOperator = null;
      buffer = currentSum;
      currentSum = 0;
      break;
    case "+":
    case "-":
    case "%":
    case "x":
      doMath(symbol);
      break;
  }
}

/**
 * Re-render the calculator screen
 */
function render() {
  screenDoc.innerText = buffer;
}

// Initialise the buttons event listener
function init() {
    document.querySelector(".calc-buttons").addEventListener("click", function() {
      buttonClick(event.target.innerText);
    });
  }
init();
