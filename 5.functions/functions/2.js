'use strict';

let calculatePressure = function(p, h) {
	const a = 9.8
	let dav = Math.round(p * a * h)
	return(dav)
}




console.log(calculatePressure(1000, 5));
console.log(calculatePressure(1030, 3));
console.log(calculatePressure(1028, 2));
console.log(calculatePressure(926, 1));