// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj){
	 const arr = []
	 for (let keys in obj){
		  if (keys.length == 5)
				arr.push(keys);
		  if (obj[keys].length == 5)
				arr.push(obj[keys]);

	 }
	 return arr;
}