'use strict';

let days = 5;
let evenDayAmount = 200;
let oddDayAmount = 100;
let total = 0;

for (let day = 1; day <= days; day++) {
    if (day % 2 === 0) {
        total += evenDayAmount;
    }
    else {
        total += oddDayAmount;
    }
}

console.log(`Расчитать протеин за ${days} дней.`)
console.log(`Количество протеина: 100 грю в нечетные дни, 200гр. в четные дни.`)
console.log(`Ожидаю количество грамм протеина ${total}`)
