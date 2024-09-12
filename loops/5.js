'use strict';

let number = 114;
let numbers = []

for(let i = 2; i < number; i++) {
    if(number % i === 0) {
        numbers.push(i)
        
    }
}
console.log(numbers.join(', '))