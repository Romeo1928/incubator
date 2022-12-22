// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
	let str = '';
//   while (n>0) {
//   str += s;
//   n--;
// }
//    return str;

	for (let i = n; i>0; i--){
		str += s;
	}
	return str
}