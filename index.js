// adding a click function to all the buttons
const buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', function(){
    const myInput = document.getElementById("display");
    const currentValue = myInput.value;
    const newValue = 7;
    myInput.value = currentValue + newValue;
});

const buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 8;
    myInput.value = currentValue + newValue;
})

const buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', function (){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 9;
    myInput.value = currentValue + newValue;
})

const buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 4;
    myInput.value = currentValue + newValue;
})

const buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 5;
    myInput.value = currentValue + newValue;
})

const buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 6;
    myInput.value = currentValue + newValue;
})

const buttonOne= document.getElementById('one');
buttonOne.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 1;
    myInput.value = currentValue + newValue;
})

const buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 2;
    myInput.value = currentValue + newValue;
})

const buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 3;
    myInput.value = currentValue + newValue;
})

const buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    const currentValue = myInput.value;
    const newValue = 0;
    myInput.value = currentValue + newValue;
})

const buttonDelete = document.getElementById('delete');
buttonDelete.addEventListener('click', function(){
    const myInput = document.getElementById('display');
    let currentValue = myInput.value
    const newValue = currentValue--;
    myInput.value = newValue;
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


