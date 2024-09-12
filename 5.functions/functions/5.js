'use strict';

let getDocumentsNumbers = function (doc = [], year) {

	let count = 0;

    for (let item of doc) {
        if (item.slice(-4).indexOf(year) > -1) {
            count++;
        }
    }

    return count;
}




console.log(
    getDocumentsNumbers(["01112018","20092017","05102017","12052018","04072005","02022018"], 2018)
);
console.log(
    getDocumentsNumbers(["20122011","03032012","20122012","09072011"], 2012)
);
console.log(
    getDocumentsNumbers(["03112018","02092016","11092015","05052018","07072007","11112011"], 2017)
);