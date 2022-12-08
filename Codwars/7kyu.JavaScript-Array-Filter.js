// https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray){
	 // filter out the odd numbers
	 let even = numbersArray.filter(function (item){
		  return item % 2 == 0;
	 });
	 return even;
}