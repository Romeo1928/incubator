// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

// function first(arr, n) {
//   if (n==1) {
//     return arr.slice(0, 1);
//   } else if (n==2){
// 	return arr.slice(0, 3);
//   } else if (n==3){
//     return arr.slice(0, 3);
//   } else if (n==4){
//     return arr.slice(0, 4);
//   } else if(n==0){
//     return arr.slice();
//   } else {
//     return arr;
// }



// function first(arr, n) {
// 	if (n >= 0) {
// 		return console.log(arr.slice(0, n));
// 	} else {
// 		return console.log(arr.slice(0, 1));
// 	}
// }


function first(arr, n) {
	if (n >= 0) {
		let newArr = arr.slice(0, n)
		return newArr
	} else {
		let newArr =arr.slice(0, 1)
		return newArr
	}
}