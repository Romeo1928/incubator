// https://www.codewars.com/kata/5731861d05d14d6f50000626/train/javascript

function bigToSmall(arr){
	return [].concat(...arr).sort((a,b) => b-a).join('>');
}
// ================================================================================
// function bigToSmall(arr){
//   //coding here...
//   let res = [].concat(...arr);
//   res.sort(function(a, b){return a - b});
//   res.reverse();
//   res = res.join(">");
//   return res;
// }