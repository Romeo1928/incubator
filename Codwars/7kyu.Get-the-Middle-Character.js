// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s){
	return s.substr(Math.floor((s.length - 1) / 2), 2 - s.length % 2);
}

// ===================================

function getMiddle(string) {
	var middleIndex = string.length / 2;
	if (string.length % 2 == 0) {
		return string.slice(middleIndex - 1, middleIndex + 1);
	} else {
		return string.charAt(middleIndex);
	}
}