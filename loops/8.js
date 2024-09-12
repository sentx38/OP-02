'use strict';

let poly = 7997;
let ylop = 0;
let isPalindrome = false;

let temp = poly; 

while (temp > 0) {
    let lastNum = temp % 10;
    ylop = ylop * 10 + lastNum;
    temp = Math.floor(temp / 10);
}

if (ylop === poly) {
    isPalindrome = true
}

console.log(isPalindrome);