// https://www.codewars.com/kata/56c5847f27be2c3db20009c3/train/javascript

function SubtractSum(n) {
	// return // fruit name like "apple"

	const arrOfStrs = Array.from(String(n));
	const arrOfNums = arrOfStrs.map((str) => Number(str));
// 	console.log(arrOfNums);

	let summ = 0
	for (let i = 0; i < arrOfNums.length; i++) {
		summ += arrOfNums[i];
	}
// 	console.log(summ)
	let res = n - summ
// 	console.log(res)
	switch (res) {
		case 1 || 3 || 24 || 26 || 47 || 49 || 68 || 70 || 91 || 93:
			return 'kiwi';
			break;
		case 2 || 21 || 23 || 42 || 44 || 46 || 65 || 67 || 69 || 88:
			return 'pear';
			break;
		case 4 || 6 || 25 || 29 || 48 || 50 || 71 || 73 || 92 || 94:
			return 'banana';
			break;
		case 4 || 6 || 25 || 29 || 48 || 50 || 71 || 73 || 92 || 94:
			return 'melon';
			break;
		case 8 || 10 || 12 || 31 || 33 || 52 || 56 || 75 || 77 || 79 || 98 || 100:
			return 'pineapple';
			break;
		case 9 || 18 || 27 || 36 || 45 || 50 || 63 || 72 || 81 || 90 || 99:
			return 'apple';
			break;
		case 11 || 13 || 34 || 55 || 57 || 78 || 80:
			return 'cucumber';
			break;
		case 14 || 16 || 35 || 37 || 39 || 58 || 60 || 83:
			return 'orange';
			break;
		case 15 || 17 || 19 || 38 || 40 || 61 || 82 || 84 || 86:
			return 'grape';
			break;
		case 20 || 22 || 41 || 43 || 62 || 64 || 66 || 85 || 87 || 89:
			return 'cherry';
			break;
		default:
			return SubtractSum(res)
			break;
	}
}

// ==========================================

// const SubtractSum = () => "apple";

// function SubtractSum(n){
// 	return "apple"
// }

// ==========================================

// function SubtractSum(n) {
// 	// return // fruit name like "apple"
//
// 	const arrOfStrs = Array.from(String(n));
// 	const arrOfNums = arrOfStrs.map((str) => Number(str));
// 	console.log(arrOfNums);
//
// 	let summ = 0
// 	for (let i = 0; i < arrOfNums.length; i++) {
// 		summ += arrOfNums[i];
// 	}
// 	console.log(summ)
// 	let res = n - summ
// 	console.log(res)
// 	switch (res) {
// 		case 1 || 3 || 24 || 26 || 47 || 49 || 68 || 70 || 91 || 93:
// 			return console.log('kiwi');
// 			break;
// 		case 2 || 21 || 23 || 42 || 44 || 46 || 65 || 67 || 69 || 88:
// 			return console.log('pear');
// 			break;
// 		case 4 || 6 || 25 || 29 || 48 || 50 || 71 || 73 || 92 || 94:
// 			return console.log('banana');
// 			break;
// 		case 4 || 6 || 25 || 29 || 48 || 50 || 71 || 73 || 92 || 94:
// 			return console.log('melon');
// 			break;
// 		case 8 || 10 || 12 || 31 || 33 || 52 || 56 || 75 || 77 || 79 || 98 || 100:
// 			return console.log('pineapple');
// 			break;
// 		case 9 || 18 || 27 || 36 || 45 || 50 || 63 || 72 || 81 || 90 || 99:
// 			return console.log('apple');
// 			break;
// 		case 11 || 13 || 34 || 55 || 57 || 78 || 80:
// 			return console.log('cucumber');
// 			break;
// 		case 14 || 16 || 35 || 37 || 39 || 58 || 60 || 83:
// 			return console.log('orange');
// 			break;
// 		case 15 || 17 || 19 || 38 || 40 || 61 || 82 || 84 || 86:
// 			return console.log('grape');
// 			break;
// 		case 20 || 22 || 41 || 43 || 62 || 64 || 66 || 85 || 87 || 89:
// 			return console.log('cherry');
// 			break;
// 		default:
// 			SubtractSum(res)
// 			break;
// 	}
// 	//
// }
// SubtractSum(100)

// ==================================================================================

// function SubtractSum(n){
// 	const fruits = {
// 		'kiwi' : [1,3,24,26,47,49,68,70,91,93],
// 		'pear' : [2,21,23,42,44,46,65,67,69,88],
// 		'banana' : [4,6,25,29,48,50,71,73,92,94,96],
// 		'melon' : [5,7,28,30,32,51,53,74,76,95,97],
// 		'pineapple' : [8,10,12,31,33,52,56,75,77,79,98,100],
// 		'apple' : [9,18,27,36,45,54,63,72,81,90,99],
// 		'cucumber' : [11,13,34,55,57,59,78,80],
// 		'orange' : [14,16,35,37,39,58,60,83],
// 		'grape' : [15,17,19,38,40,61,82,84,86],
// 		'cherry' : [20,22,41,43,62,64,66,85,87,89]
// 	}
// 	n = n - [...String(n)].reduce((a,b) => a + +b,0)
// 	let fruit = ''
// 	for(let x in fruits)
// 		fruit += fruits[x].includes(n) ? x : ''
// 	return fruit ? fruit : SubtractSum(n)
// }