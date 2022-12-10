// https://www.codewars.com/kata/572fdeb4380bb703fc00002c/train/javascript

function isolateIt(arr){
	return arr.map(item=>{
		if(item.length % 2 == 0) {return item.slice(0, item.length/2) + '|' + item.slice(item.length/2)}
		if(item.length % 2 !== 0) {return item.slice(0, item.length/2) + '|' + item.slice((item.length/2) +1)}
	})
}