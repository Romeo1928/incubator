// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(num) {
	let arr = num.split(' ');
	// 	console.log(arr);

	let low = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (low > Number(arr[i])) {
			low = arr[i];
		}
	}

	let high = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (high < Number(arr[i])) {
			high = arr[i];
		}
	}

	return `${high} ${low}`;
}

//======================================================

function highAndLow(numbers) {
	numbers = numbers.split(' ').map(Number);
	return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//========================================================

function highAndLow(numbers) {
	numbers = numbers.split(' ');
	return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
