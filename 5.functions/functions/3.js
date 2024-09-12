'use strict';

let callories = []

let getDiet = function(callories, limit)
{
	let cal = 0;
	let count = 0;
	for (let i of callories){
		cal += i
		if (cal <= limit )
		{
			count++
		}
		else break
	}

	return count
}




console.log(getDiet([10, 20, 30, 40, 90], 100));
console.log(getDiet([12, 27, 9, 20, 12, 13, 35], 90));
console.log(getDiet([20, 21, 15, 20, 13, 10, 29, 22, 10], 150));
