// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

function blackAndWhite(arr) {
	//coding here...
	if (!Array.isArray(arr)) return "It's a fake array"
	else if (arr.includes(5) && arr.includes(13)) return "It's a black array"
	else return "It's a white array"
}

//==============================================================================
const blackAndWhite = arr =>
	`It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;

//========================================================================================
function blackAndWhite(arr) {
	//coding here...
	if (!Array.isArray(arr)) return "It's a fake array"
	else if (arr.indexOf(5) != -1 && arr.indexOf(13) != -1) return 'It\'s a black array'
	else return "It's a white array"
}

//=========================================================================
function blackAndWhite(arr) {
	return !Array.isArray(arr) ? 'It\'s a fake array' : arr.indexOf(5) != -1 && arr.indexOf(13) != -1 ? 'It\'s a black array' : 'It\'s a white array';
}

//==============================================================================
