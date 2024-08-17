// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('button');

// let currentNumber = '';
// let previousNumber = '';
// let operation = '';

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const value = button.textContent;

//     if (value === 'C') {
//       clearDisplay();
//     } else if (value === '⌫') {
//       backspace();
//     } else if (value === '=') {
//       calculate();
//     } else if (['+', '-', '*', '/'].includes(value)) {
//       operation = value;
//       previousNumber = currentNumber;
//       currentNumber = '';
//     } else {
//       currentNumber += value;
//       display.value = currentNumber;
//     }
//   });
// });

// function clearDisplay() {
//   display.value = '';
//   currentNumber = '';
//   previousNumber = '';
//   operation = '';
// }

// function backspace() {
//   currentNumber = currentNumber.slice(0, -1);
//   display.value = currentNumber;
// }

// function calculate() {
//   const num1 = parseFloat(previousNumber);
//   const num2 = parseFloat(currentNumber);
//   let result;

//   switch (operation) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = 0;
//   }

//   display.value = result.toString();
//   currentNumber = result.toString();
//   previousNumber = '';
//   operation = '';
// }




const inputValu = document.getElementById("result");

function clear() {
    inputValue.value = "";
}

function back() {

}
   
const inputValue = document.getElementById("result");

function clear() {
    inputValue.value = "";
}

function back() {
    inputValue.value = inputValue.value.slice(0, -1);
}

function solve(value) {
    if (inputValue.value === "") {
        inputValue.value = value;
    } else {
        inputValue.value += value;
    }
}

function result() {
    try {
        const result = eval(inputValue.value);
        inputValue.value = result;
    } catch (error) {
        inputValue.value = "Error";
    }
}





// const display = document.getElementById('display');
// const buttons = document.querySelectorAll('button');

// let currentNumber = '';
// let previousNumber = '';
// let operation = '';

// buttons.forEach(button => {
//   button.addEventListener('click', handleButtonPress);
// });

// function handleButtonPress(event) {
//   const value = event.target.textContent;

//   switch (value) {
//     case 'C':
//       clearDisplay();
//       break;
//     case '⌫':
//       backspace();
//       break;
//     case '=':
//       calculate();
//       break;
//     default:
//       if (isOperator(value)) {
//         handleOperator(value);
//       } else {
//         handleNumber(value);
//       }
//   }
// }

// function isOperator(value) {
//   return ['+', '-', '*', '/'].includes(value);
// }

// function handleNumber(value) {
//   currentNumber += value;
//   display.value = currentNumber;
// }
// function handleOperator(value) {
//   operation = value;
//   previousNumber = currentNumber;
//   currentNumber = '';
// }
// function clearDisplay() {
//   display.value = '';
//   currentNumber = '';
//   previousNumber = '';
//   operation = '';
// }

// function backspace() {
//   currentNumber = currentNumber.slice(0, -1);
//   display.value = currentNumber;
// }

// function calculate() {
//   if (!isValidInput()) {
//     display.value = 'Error';
//     return;
//   }

//   const num1 = parseFloat(previousNumber);
//   const num2 = parseFloat(currentNumber);
//   let result;

//   switch (operation) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       if (num2 === 0) {
//         display.value = 'Error';
//         return;
//       }
//       result = num1 / num2;
//       break;
//     default:
//       result = 0;
//   }

//   display.value = result.toString();
//   currentNumber = result.toString();
//   previousNumber = '';
//   operation = '';
// }

// function isValidInput() {
//   return !isNaN(parseFloat(previousNumber)) && !isNaN(parseFloat(currentNumber));
// }