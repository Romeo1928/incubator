// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	// TODO
	if(mpg * fuelLeft >= distanceToPump) {
		return true;
	} else {
		return false;
	}
};