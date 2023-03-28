// global variables 
let display = document.getElementById('display');
let currentValue;
let newValue;

// adding a click function to all the buttons

const buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', function(){
    newValue = 7;
    currentValue = display.value;                                                        // gets the current value of  the calculator  
    display.value = currentValue + newValue;
});

const buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', function(){
    const newValue = 8;
    currentValue = display.value;        
    display.value = currentValue + newValue;
})

const buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', function (){
    newValue  = 9;
    currentValue = display.value;       
    display.value = currentValue + newValue;
})

const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', function(){
    newValue  = 4;
    currentValue = display.value;        
    display.value = currentValue + newValue;
})

const buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', function(){
    newValue  = 5;
    currentValue = display.value;        
    display.value = currentValue + newValue;
})

const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', function(){
    newValue  = 6;
    currentValue = display.value;       
    display.value = currentValue + newValue;
})

const buttonOne= document.getElementById('one');
buttonOne.addEventListener('click', function(){
    newValue  = 1;
    currentValue = display.value;                                            
    display.value = currentValue + newValue;
})

const buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', function(){
    newValue  = 2;
    currentValue = display.value;                                                 // gets the current value of the calculator  
    display.value = currentValue + newValue;
})

const buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', function(){
    newValue  = 3;
    currentValue = display.value;                                                  
    display.value = currentValue + newValue;
})

const buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', function(){
    newValue  = 0;
    currentValue = display.value;                                            
    display.value = currentValue + newValue;
})

const buttonDelete = document.getElementById('delete');
buttonDelete.addEventListener('click', function(){
    currentValue = display.value
    const stringValue = currentValue.toString();
    const newStringValue = stringValue.slice(0, -1);
    const newCurrentValue = Number(newStringValue);
    display.value = newCurrentValue;
    if (display.value == 0)return display.value = "";                  // case where after delete Zero returns 
})

const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(){
    display.value = "";                                                                 // clears all the number from the display
})


/* creating a function to handle all math operation */ 
// function for addition 
function addition(number1, number2){
    let addedNum = number1 + number2;
    return addedNum
}
// function for subtraction 
function subtraction(number1, number2){
    let subNum = number1 - number2;
    return subNum
}
// function for multiplication
function multiply(number1, number2) {
    let multiNum = number1 * number2;
    return multiNum
}
// function for division 
function division (number1, number2){
    let dividedNum = number1 / number2;
    return dividedNum
}

// variables to contain values 
let number1;
let number2;
let operator;

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


