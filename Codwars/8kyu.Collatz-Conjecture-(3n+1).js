// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript

var hotpo = function (n) {
	if (n == 1) return 0;
	if (n % 2 == 0) return n / 2
	if (n % 2 !== 0) return 3 * n + 1
	hotpo()
}

var hotpo = function (n) {
	var summ = 0;

	while (n > 1) {
		n = n % 2 ? 3 * n + 1 : n / 2;
		summ++;
	}
	return summ;
}

// ===============================================

// var hotpo = function(n, acc = 0) {
// 	if (n <= 1) {
// 		return acc;
// 	} else {
// 		return hotpo(n%2==0 ? n/2 : 3*n+1, acc+1);
// 	}
// }

// ==================================================

// no more 100
// var hotpo = function(n){
// 	if(n == 0) return 0;
// 	for (let i = 0; i < 100; i++){
// 		if (n == 1){
// 			return i;
// 		}else if ( n % 2 == 0){
// 			n /= 2;
// 		}else{
// 			n = n * 3 + 1
// 		}
// 	}
// }