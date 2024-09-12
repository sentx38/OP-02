'use strict';

let startNumber = 3;
let multiplier = 3;
let quantity = 6;
let currentNumber = startNumber
let numbers = []


for (let i = 1; i <= quantity; i++){
    numbers.push(currentNumber)
    currentNumber *= multiplier
}

console.log(`Стартовое значение ${startNumber}, множитель ${multiplier}, количество: ${quantity}.`)
console.log(`Ожидаю вывод в консоль: ${numbers.join(', ')}`)