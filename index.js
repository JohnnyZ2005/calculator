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

