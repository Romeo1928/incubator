// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a,b) {
	 let summ =  +a + +b
	 return summ.toString();
}
//=
// ===========================

function sumStr(a,b) {
	 return String(Number(a)+Number(b));
}