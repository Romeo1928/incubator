// https://www.codewars.com/kata/572cb264362806af46000793/train/javascript

function threeInOne(arr){
	var lastIndex = 0
	var finalArr = []
	for(var i=0; i<arr.length; i+=3) {
		var sumArr = arr.slice(lastIndex, lastIndex+3).reduce((a, b) => {
			return a + b
		})
		finalArr.push(sumArr)
		lastIndex += 3;
	}
	return finalArr
}
// ============================================================================
// function threeInOne(arr){
//   var result = [];
//   for(var i=0;i<arr.length;i+=3) {
//     result.push(arr[i] + arr[i+1] + arr[i+2]);
//   }
//   return result
// }
