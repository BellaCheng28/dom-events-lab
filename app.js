/*-------------------------------- Constants and Variables --------------------------------*/

let currentInput = '';
let previousInput = '';
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const numberButtons = document.querySelectorAll('.button.number');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.button.operator');
const equalsButton = document.querySelector('.button.equals');
const clearButton = document.querySelector('.button.operator.C');

/*----------------------------- Event Listeners -----------------------------*/
numberButtons.forEach(button => {
  button.addEventListener('click', function() {
    currentInput += this.innerText; // Append number
    display.innerText = currentInput; // Update display
  });
});

operatorButtons.forEach(opButton => {
  opButton.addEventListener('click', function() {
    if (currentInput) {
      previousInput = currentInput; // Store current input
      operator = this.innerText; // Store operator
      currentInput = ''; // Reset current input for next number
    }
  });
});

// Equals button event listener
equalsButton.addEventListener('click', function() {
  if (previousInput && currentInput) {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    
    switch (operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
    }
    
    display.innerText = result; // Show result on display
    currentInput = result; // Update current input for further calculations
    previousInput = ''; // Reset previous input
    operator = ''; // Reset operator
  }
});

// Clear button event listener
clearButton.addEventListener('click', function() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.innerText = ''; // Reset display
});