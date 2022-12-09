// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
	return newStr;
};
//===========================================

function disemvowel(str) {
	return str.replace(/[aeiouAEIOU]/g,"");
}