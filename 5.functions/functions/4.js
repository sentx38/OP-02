"use strict";

function calculate(firstNumber, secondNumber, operator) {
  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
	}
}

console.log(calculate("15", "20", "+"));
console.log(calculate("110", "22", "/"));
console.log(calculate("12", "9", "*"));
console.log(calculate("356", "213", "-"));
