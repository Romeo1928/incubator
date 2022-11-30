// 8 kyu Find Maximum and Minimum Values of a List

var min = function (list) {
	return Math.min(...list);
}

var max = function (list) {
	return Math.max(...list);
}



// ======================================================================
var min = function (list) {
	let min = list[0];
	for (let i = 0; i < list.length; i++) {
		if (min > list[i]) {
			min = list[i];
		}
	}
	return min;
}

var max = function (list) {
	let max = list[0];
	for (let i = 0; i < list.length; i++) {
		if (max < list[i]) {
			max = list[i];
		}
	}
	return max;
}



// ======================================================================
var min = function (list) {
	let min = list[0];
	for (let i of list) {
		if (i < min) {
			min = i;
		}
	}
	return min;
}

var max = function (list) {
	let max = list[0];
	for (let i in list) {
		if (list[i] > max) {
			max = list[i];
		}
	}
	return max;
}