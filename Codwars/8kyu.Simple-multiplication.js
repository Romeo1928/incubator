// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(number) {
	// your code........
	if (number % 2 == 0) {
		return number * 8;
	} else {
		return number * 9;
	}
}

// ============================

function simpleMultiplication(n) {
	return n % 2 == 0 ? n * 8 : n * 9
}

// ==========================
function simpleMultiplication(n) {
	return n * (n % 2 ? 9 : 8);
}
