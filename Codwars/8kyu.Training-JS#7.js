// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n){
	 if (n<5) return n*100;
	 else if (n>=5 & n<10) return n*95;
	 else if (n>=10) return n*90;
}
//==========================================

// function saleHotdogs(n){
// 	 return n*(n<5?100:n<10?95:90);
// }