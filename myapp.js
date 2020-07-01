//VARIABLE DECLARATIONS AND DOM
//-----------------------------

let firstNumber = 0;
let operation = "";
let displayValue = "";
let smallDisplayValue = "";
let smallScreen = document.querySelector(".smallscreen");
let screen = document.querySelector(".screen");
let toggle = false;

/* select and add event listeners to operators */
let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener('click', checkForValue);
addBtn.addEventListener('click', saveOperatorAdd);
addBtn.addEventListener('click', saveFirstNumber);
addBtn.addEventListener('click', saveOperatorForSmallScreenAdd)
addBtn.addEventListener('click', resetDisplayValue);
let minusBtn = document.querySelector(".minus-btn");
minusBtn.addEventListener('click', checkForValue);
minusBtn.addEventListener('click', saveOperatorMinus);
minusBtn.addEventListener('click', saveFirstNumber);
minusBtn.addEventListener('click', saveOperatorForSmallScreenMinus)
minusBtn.addEventListener('click', resetDisplayValue);
let divideBtn = document.querySelector(".divide-btn");
divideBtn.addEventListener('click', checkForValue);
divideBtn.addEventListener('click', saveOperatorDivide);
divideBtn.addEventListener('click', saveFirstNumber);
divideBtn.addEventListener('click', saveOperatorForSmallScreenDivide)
divideBtn.addEventListener('click', resetDisplayValue);
let multiplyBtn = document.querySelector(".multiply-btn");
multiplyBtn.addEventListener('click', checkForValue);
multiplyBtn.addEventListener('click', saveOperatorMultiply);
multiplyBtn.addEventListener('click', saveFirstNumber);
multiplyBtn.addEventListener('click', saveOperatorForSmallScreenMultiply)
multiplyBtn.addEventListener('click', resetDisplayValue);


/* select and add event listeners to numbers */
let num1 = document.querySelector(".num-1")
num1.addEventListener('click', myFunction1)
num1.addEventListener('click', saveToSmallDisplay1);
let num2 = document.querySelector(".num-2")
num2.addEventListener('click', myFunction2)
num2.addEventListener('click', saveToSmallDisplay2);
let num3 = document.querySelector(".num-3")
num3.addEventListener('click', myFunction3)
num3.addEventListener('click', saveToSmallDisplay3);
let num4 = document.querySelector(".num-4")
num4.addEventListener('click', myFunction4)
num4.addEventListener('click', saveToSmallDisplay4);
let num5 = document.querySelector(".num-5")
num5.addEventListener('click', myFunction5)
num5.addEventListener('click', saveToSmallDisplay5);
let num6 = document.querySelector(".num-6")
num6.addEventListener('click', myFunction6)
num6.addEventListener('click', saveToSmallDisplay6);
let num7 = document.querySelector(".num-7")
num7.addEventListener('click', myFunction7)
num7.addEventListener('click', saveToSmallDisplay7);
let num8 = document.querySelector(".num-8")
num8.addEventListener('click', myFunction8)
num8.addEventListener('click', saveToSmallDisplay8);
let num9 = document.querySelector(".num-9")
num9.addEventListener('click', myFunction9)
num9.addEventListener('click', saveToSmallDisplay9);

let equals = document.querySelector(".equals")
equals.addEventListener('click', operate);

let num0 = document.querySelector(".num-10")
num0.addEventListener('click', myFunction0)
num0.addEventListener('click', saveToSmallDisplay0);

let decimal = document.querySelector(".decimal");
decimal.addEventListener('click', addDecimal);
decimal.addEventListener('click', saveToSmallDisplayDecimal);
decimal.addEventListener('click', toggleFunction);

function toggleFunction(){
    toggle = true;
    return toggle;
}

let clear = document.querySelector(".clear")
clear.addEventListener('click', resetDisplayValue);
clear.addEventListener('click', resetFirstNumber);
clear.addEventListener('click', resetOperation);
clear.addEventListener('click', resetSmallDisplayValue);
clear.addEventListener('click', resetToggle);

let backSpace = document.querySelector(".backspace");
backSpace.addEventListener('click', deleteOne)
backSpace.addEventListener('click', deleteOneSmallDisplay)
backSpace.addEventListener('click', resetToggle);



// FUNCTIONS TIED TO EVENT LISTENERS
//----------------------------------

function deleteOne(){
    displayValue = displayValue.substring(0, displayValue.length - 1);
    screen.textContent = displayValue;
    return displayValue;
}
function deleteOneSmallDisplay(){
    smallDisplayValue = smallDisplayValue.substring(0, smallDisplayValue.length - 1);
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}

/* functions that string numbers and write it to big screen */

function myFunction1(){
    displayValue += 1;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction2(){
    displayValue += 2;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction3(){
    displayValue += 3;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction4(){
    displayValue += 4;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction5(){
    displayValue += 5;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction6(){
    displayValue += 6;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction7(){
    displayValue += 7;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction8(){
    displayValue += 8;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction9(){
    displayValue += 9;
    screen.textContent = displayValue;
    return displayValue;
}
function myFunction0(){
    displayValue += 0;
    screen.textContent = displayValue;
    return displayValue;
}
function addDecimal(){
    if(toggle == false){
    displayValue += ".";
    screen.textContent = displayValue
    return displayValue;
    } else return;
}

/* functions that save input, string numbers, and display it on small screen */

function saveToSmallDisplay1(){
    smallDisplayValue += 1;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay2(){
    smallDisplayValue += 2;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay3(){
    smallDisplayValue += 3;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay4(){
    smallDisplayValue += 4;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay5(){
    smallDisplayValue += 5;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay6(){
    smallDisplayValue += 6;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay7(){
    smallDisplayValue += 7;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay8(){
    smallDisplayValue += 8;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay9(){
    smallDisplayValue += 9;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplay0(){
    smallDisplayValue += 0;
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function saveToSmallDisplayDecimal(){
    if(toggle == false){
    smallDisplayValue += ".";
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
    } else return;
}

/* functions that save which operator was selected by writing the value to "operation"-variable,
and display the chosen operator on big screen*/

function saveOperatorAdd(){
    operation = "+";
    screen.textContent = displayValue + " " + operation;
    return operation;
}

function saveOperatorMinus(){
    operation = "-";
    screen.textContent = displayValue + " " + operation;
    return operation;
}

function saveOperatorDivide(){
    operation = "/";
    screen.textContent = displayValue + " " + operation;
    return operation;
}

function saveOperatorMultiply(){
    operation = "*";
    screen.textContent = displayValue + " " + operation;
    return operation;
}

/* functions that save the operator, and display it on small screen*/

function saveOperatorForSmallScreenAdd(){
    smallDisplayValue += " + "
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}

function saveOperatorForSmallScreenMinus(){
    smallDisplayValue += " - "
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}

function saveOperatorForSmallScreenDivide(){
    smallDisplayValue += " / "
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}

function saveOperatorForSmallScreenMultiply(){
    smallDisplayValue += " * "
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}

/* function that stores the first chosen number as a value in the "firstNumber" variable and
returns it */

function saveFirstNumber(){
    firstNumber = displayValue;
    return firstNumber;
}

/* functions that reset all values on clear.*/

function resetDisplayValue(){
    displayValue = "";
    return displayValue;
}
function resetFirstNumber(){
    firstNumber = 0;
    screen.textContent = firstNumber
    return firstNumber;
}
function resetOperation(){
    operation = "";
    return operation;
}
function resetSmallDisplayValue(){
    smallDisplayValue = "";
    smallScreen.textContent = smallDisplayValue;
    return smallDisplayValue;
}
function resetToggle(){
    toggle = false;
    return toggle;
}

/* this function checks if the value of "operation" is set to default or not. if it was still
set to default ("") before clicking on an operator, then it means it was the first time in the calculation
that an operator was clicked.
if it was not set to default before clicking an operator, it means it is not the first time 
an operator was pressed in a calculation, in which case the use of the operator triggers the 
operate function which performs a calculation. 
this allows the user to string together calculations using multiple operators, 
for example 4 + 4 - 3.
In this example selecting the minus operator will trigger the operate function to calculate
4 + 4*/

function checkForValue(){
    if(operation !== ""){
        operate();
    }
    toggle = false;
    return toggle;
}

// CALCULATOR FUNCTION
//---------------------

function operate(){

    let int1 = parseFloat(firstNumber, 10);
    let int2 = parseFloat(displayValue, 10);
    let operator = operation; 
    let sum = 0;
  
    if(int2 == 0){
        sum = 0;
        return sum;
    }
    if(operator == "+"){
      function addFunction(){
        sum = int1 + int2;
        return sum;
      }
      addFunction();
    }
    if(operator == "-"){
      function subtractFunction(){
        sum = int1 - int2;
        return sum;
      }
      subtractFunction()
    }
    if(operator == "/"){
      function divideFunction(){
        sum = int1 / int2;
        return sum;
      }
      divideFunction()
    }
    if(operator == "*"){
      function multiplyFunction(){
        sum = int1 * int2;
        return sum;
      }
      multiplyFunction()
    }
    let s = sum;
    if(s % 1 !== 0){    //this checks if s is a floating point nmbr. 
    s = sum.toFixed(3); // if so, it rounds to 3 decimal places
    }
    displayValue = s;
    screen.textContent = s;
    setFirstNumberToZero();
    return displayValue;
  }

function setFirstNumberToZero(){
    firstNumber = 0;
    return firstNumber;
}