// https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript


function cutIt(arr){
	 const minLength = Math.min(...arr.map(x=> x.length));
	 return arr.map (x => x.slice(0, minLength));
}
// ===============================================================

function cutIt(arr){
	 //coding here...
	 let minl = Infinity;
	 for (let i=0; i<arr.length; i++) {
		  if (arr[i].length < minl) {
				minl = arr[i].length;
		  }
	 }
	 for (let i=0; i<arr.length; i++) {
		  arr[i] = arr[i].slice(0,minl);
	 }
	 return arr;
}