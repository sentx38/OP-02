'use strict';

let days = 5; // Дней в периоде
let period = 3; // Как часто я ем протеин (раз в три дня)
let workDayAmount = 200; // Количество протеина в будние
let weekendAmount = 100; // Количество протеина в выходные
let total = 0;

for (let i = 1; i <= days; i++){
    if(i % period === 0) {
        let weekDay = i % 7;

        if(weekDay>=1 && weekDay<=5) {
            total += workDayAmount;
        }
        else{
            total += weekendAmount;
        }
    }
}

console.log(`Рассчитать потребленный протеин за ${days} дней.${total}`)
console.log(`Колличество протеина: 200 гр. в будние, 100 гр. в выходные, раз в 3 дня.`)
console.log(`Ожидаю количество грамм протеина ${total}`)