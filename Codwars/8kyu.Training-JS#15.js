// https://www.codewars.com/kata/57256064856584bc47000611

const howManySmaller = (arr,n) => arr.filter(elem => +elem.toFixed(2) <n ).length;


//=======================================

function howManySmaller(arr,n){
	 let length = 0;
	 for (i = 0; i < arr.length; i++){
		  if (arr[i].toFixed(2) < n)
				length++;
	 }
	 return length;
}
