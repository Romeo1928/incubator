// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
	let arr = [];

	if (humanYears == 1) {
		arr.push(1) + arr.push(15) + arr.push(15);
	} else if (humanYears == 2) {
		arr.push(2) + arr.push(24) + arr.push(24);
	} else if (humanYears > 2) {
		arr.push(humanYears) + arr.push(4 * (humanYears - 2) + 24) + arr.push(5 * (humanYears - 2) + 24);
	}
	return arr;
}

// ====================================================================================

// humanYearsCatYearsDogYears = (humanYears) => {
// 	let catYears = 0;
// 	let dogYears = 0;
//
// 	for (let i = 1; i <= humanYears; i++) {
// 		if (i === 1) {
// 			catYears += 15;
// 			dogYears += 15;
// 		} else if (i === 2) {
// 			catYears += 9;
// 			dogYears += 9;
// 		} else {
// 			catYears += 4;
// 			dogYears += 5;
// 		}
// 	}
// 	return [humanYears, catYears, dogYears];
// }

// =========================================================================================

// function humanYearsCatYearsDogYears(humanYears) {
// 	switch (humanYears) {
// 		case 1:
// 			return [1, 15, 15]
// 		case 2:
// 			return [2, 24, 24];
// 		default:
// 			return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
// 	}
// }

// ================================================================================


// var humanYearsCatYearsDogYears = function (y) {
// 	if (y == 1) return [1, 15, 15]
// 	if (y == 2) return [2, 24, 24]
// 	return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
// }

// =======================================================================================
