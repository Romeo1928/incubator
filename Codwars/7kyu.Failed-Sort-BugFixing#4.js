// https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript

var sortArray = function (value) {
	// let array = value.split('');
	// console.log(array);
	// let sort = array.sort((a, b) => a - b);
	// console.log(sort);
	// let str = sort.join('');
	// console.log(str);
	return value.split('').sort((a, b) => a - b).join('');
}

// ==============================================================================

// var sortArray = function (value) {
// 	// let array = value.split('');
// 	// console.log(array);
// 	// let arrayNumb = array.map((el) => Number(el));
// 	// console.log(arrayNumb);
// 	// let sort = arrayNumb.sort((a, b) => a - b);
// 	// console.log(sort);
// 	// let str = sort.join('');
// 	// console.log(str);
// 	return value.split('').map((el) => Number(el)).sort((a, b) => a - b).join('');
// }