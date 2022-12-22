// https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript

function problem(x){
	//your code here
	if(typeof x == 'number'){
		return x * 50 + 6;
	} else {
		return "Error";
	}
}
// ===================================
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;