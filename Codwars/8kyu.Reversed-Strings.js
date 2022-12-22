// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
	let out = '';
	for (let i = str.length - 1; i>=0 ; i--){
		out += str[i];
	}
	return out;
}
// ===============================================
function solution(str){
	return str.split("").reverse().join("");
}