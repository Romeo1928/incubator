// // https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
//
// function getCount(str) {
// 	let count = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] == 'a') {
// 			count++;
// 		} else if (str[i] == 'e') {
// 			count++;
// 		} else if (str[i] == 'i') {
// 			count++;
// 		} else if (str[i] == 'o') {
// 			count++;
// 		} else if (str[i] == 'u') {
// 			count++;
// 		}
// 	}
// 	return count;
// }
// ===================================================
//
// function getCount(str) {
// 	return (str.match(/[aeiou]/ig)||[]).length;
// }
// ================================================
// function getCount(str) {
// 	var vowelsCount = 0;
// 	for (index in str){
// 		switch (str[index]) {
// 			case 'a':
// 			case 'e':
// 			case 'i':
// 			case 'o':
// 			case 'u':
// 				vowelsCount++;
// 				break;
// 		}
// 	}
// 	return vowelsCount;
// }
// ===================================================
// function getCount(str) {
// 	var vowelsCount = 0;
// 	str.split("").forEach(function(x){
// 		if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
// 			vowelsCount += 1;
// 		}
// 	});
// 	return vowelsCount;
// }
// ============================================================
// function getCount(str) {
// 	return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }