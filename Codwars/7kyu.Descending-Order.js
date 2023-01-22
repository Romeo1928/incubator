// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

const descendingOrder = n =>
	Number([...String(n)].sort((a, b) => b - a).join(''))



function descendingOrder(n) {
	return parseInt(n.toString().split("").sort().reverse().join(""));
}