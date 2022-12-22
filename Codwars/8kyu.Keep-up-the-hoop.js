// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

function hoopCount (n) {
	//your code goes here
	if (n >= 10) {
		return "Great, now move on to tricks";
	}  else {
		return "Keep at it until you get it";
	}
}
// =============================================

function hoopCount (n) {
	return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}
