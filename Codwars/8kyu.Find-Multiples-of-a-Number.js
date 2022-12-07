// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

function findMultiples(int, lim) {
	 let arr = [];
	 for (let i = int; i <= lim; i += int){
		  arr.push(i);
	 }
	 return arr;
}
//==========================================

function findMultiples(int,limit){
	 return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}