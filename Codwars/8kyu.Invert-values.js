// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

const invert = array => array.map(num => -num);
//==============================================

function invert(array) {
	 var newArr = [];
	 for(var i = 0; i < array.length; i++){
		  newArr.push(-array[i]);
	 }
	 return newArr;
}
//===========================================

function invert(array) {
	 var newArr = [];
	 for(var i = 0; i < array.length; i++){
		  newArr.push(array[i]*(-1));
	 }
	 return newArr;
}