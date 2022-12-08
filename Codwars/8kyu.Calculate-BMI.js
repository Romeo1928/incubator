// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
	let bmi = weight / (height**2);
	if (bmi < 18.5) {
		return "Underweight";
	} else if (bmi < 25) {
		return "Normal";
	} else if (bmi < 30) {
		return "Overweight";
	} else {
		return "Obese";
	}
}
// =======================================
function bmi(weight, height) {
	let bmi = weight / (height * height);
	switch(true){
		case bmi <= 18.5:
			return "Underweight";
		case bmi <= 25.0:
			return "Normal";
		case bmi <= 30.0:
			return "Overweight";
		case bmi > 30:
			return "Obese";
	}
}