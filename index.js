let first_number;
let second_number;
let current_operation = null;
let shouldResetScreen = false;

// getting all the necessary button
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const currentOperationScreen = document.querySelector('.screen-current')
const lastOperationScreen = document.getElementById('screen-last')
const dotButton = document.getElementById('dot')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')
const equalsButton = document.getElementById('equal')

// loop through the number button 
numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})
// loop through the operator button 
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => appendOperator(button.textContent))
})
// clear button 
clearButton.addEventListener('click', clear) 
// delete button 
deleteButton.addEventListener('click', deleteBtn)
// equal button 
equalsButton.addEventListener('click', equalTo)
// dot button
dotButton.addEventListener('click', appendPoint)  

function resetScreen(){
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function appendNumber(number){
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)  
    resetScreen()
    currentOperationScreen.textContent += number
}

function appendOperator(operator){
    if (current_operation !== null) equalTo()
    first_number = currentOperationScreen.textContent
    current_operation = operator
    lastOperationScreen.textContent = `${first_number} ${current_operation}`
   shouldResetScreen = true
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
  }

function clear(){
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = ' ';
    first_number = ''
    second_number = ''
    current_operation = null
}

function deleteBtn(){
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0,-1);
}

function equalTo(){
    if (current_operation === null || shouldResetScreen) return
    if (current_operation === '/' && currentOperationScreen.textContent === '0'){
        alert('No number is divisble by Zero')
        return
    }
    second_number = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(evaluate(first_number, current_operation, second_number))
    lastOperationScreen.textContent = `${first_number} ${current_operation} ${second_number} =`
    current_operation = null
}

function roundResult(number){
    return Math.round(number * 1000)/ 1000
}

/* All Math Operations */ 
function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function multi (a,b) {
    return a * b;
}
function divide(a,b){
    return a / b;
}

function evaluate(num_1, operator, num_2){
    num_1 = Number(num_1)
    num_2 = Number(num_2)
    switch(operator) {
        case '+':
           return  add(num_1, num_2)
        case '-':
            return sub(num_1, num_2)
        case '*':
            return multi(num_1, num_2)
        case '/':
            return divide(num_1, num_2)
    }
}
