// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return birds.filter(el => !geese.includes(el));
	// return an array containing all of the strings in the input array except those that match strings in geese
};

// ======================================================================================

function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	var newArray = [];
	for (var i = 0; i < birds.length; i++) {
		if (!geese.includes(birds[i])) {
			newArray.push(birds[i]);
		}
	}
	return newArray;
};