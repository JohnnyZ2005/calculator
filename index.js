// set all the global variable 
let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
let shouldRestScreen = false;

/**    Gets all the button and add its respective functionality */
const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})

const operatorButtons = document.querySelectorAll('[data-operator]');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => appendOperator(button.textContent))
})

const lastScreenInput = document.getElementById('screen-last')
const  currentScreenInput = document.querySelector('.screen-current')

const equalButton = document.getElementById('equal')
equalButton.addEventListener('click', equalTo)

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearNumber);


const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', deleteNumber);


// function to reset current screen 
function reset(){
    currentScreenInput.textContent = '';
    shouldRestScreen = true
}

// function to handle number input 
function appendNumber(number){
    if (currentScreenInput.textContent === '0'){
        currentScreenInput.textContent = '';
    } 
    currentScreenInput.textContent += number
}

// function to handle delete 
function deleteNumber(){
    currentScreenInput.textContent = currentScreenInput.textContent.toString().slice(0, -1);
    if (currentScreenInput.textContent === ''){
        currentScreenInput.textContent = 0;
    }
}

// function to handle clear 
function clearNumber(){
    currentScreenInput.textContent = 0;
    lastScreenInput.textContent = ' ';
}

// function to handle operator input 
function appendOperator(operator){
   firstNumber = currentScreenInput.textContent;
   currentOperation = operator
   lastScreenInput.textContent = `${firstNumber} ${currentOperation}`
   reset()
}

// function to handle equal button 
function equalTo(){
    secondNumber = currentScreenInput.textContent;
   currentScreenInput.textContent = operate(firstNumber, currentOperation, secondNumber);
   lastScreenInput.textContent = `${firstNumber} ${currentOperation} ${secondNumber} = `;
   currentOperation = null;
}







/* creating a function to handle all math operation */ 
// function for addition 
function addition(a,b){
   return a+b
}
// function for subtraction 
function subtraction(a,b){
    return a-b
}
// function for multiplication
function multiply(a,b) {
    return a*b
}
// function for division 
function division (a,b){
   return a/b
}


// handles all mathematical operations 
function operate (number1, operator, number2){
   switch (operator){
    case "+":
        return addition(number1, number2);
    case "-":
        return subtraction(number1, number2);
    case "*":
        return multiply(number1, number2);
    case "/":
        return division(number1, number2);
    default:
        return "Operator does not exist"
   }
}


