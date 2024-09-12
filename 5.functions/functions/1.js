'use strict';

let checkVehicle = function (count, weight) {
	if (count === 2 && weight < 100)
		return('Парковка Разрешена')
	else {
		return('Вам здесь не место!')
	}
}

console.log(checkVehicle(2, 150));
console.log(checkVehicle(4, 1200));
console.log(checkVehicle(2, 14));
console.log(checkVehicle(2, 100));
console.log(checkVehicle(4, 50));
