// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
	return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}

function squareDigits(num){
	return +num.toString().split('').map(i => i*i).join('');
}

function squareDigits(num){
	var array = num.toString().split('').map( function(int) {
		var i = parseInt(int);
		return i * i;
	});

	return parseInt(array.join(""));
}


function squareDigits(num) {
	let count = num.toString();
	let res = [];

	for (let i = 0; i < count.length; i++) {
		res.push(parseInt(count[i]));
		res[i] = res[i] * res[i];
	}
	let stt = res.join('')



	return Number(stt);
}