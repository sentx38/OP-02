'use strict';

let lastNumber = 12;
let multiplicationResult = 1;

for(let i = 1; i <= lastNumber; i++){
    if(i % 2 === 0) {
        multiplicationResult *= i
    }
}
console.log(`Последовательность чисел от 1 до ${lastNumber}. Ожидаю результат ${multiplicationResult}`)