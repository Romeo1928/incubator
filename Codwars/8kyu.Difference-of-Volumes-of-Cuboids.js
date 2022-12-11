// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript

function findDifference(a, b) {
	 //loading...
	 let str = 1;
	 let str1 = 1;
	 for (let i = 0; i<a.length; i++){
		  str *= a[i]
	 }
	 for (let i = 0; i<b.length; i++){
		  str1 *= b[i]
	 }
	 if (str > str1){
		  return str - str1
	 } else {
		  return str1 - str
	 }
}