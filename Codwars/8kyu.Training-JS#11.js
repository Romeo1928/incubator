// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls){
	 var bag=[];
	 for (let i = 0; i < dolls.length; i++){
		  if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
				bag.push(dolls[i]);
				if(bag.length == 3) {break;}
		  }else {
				continue;
		  }
	 }
	 return bag;
}

// =======================================================

// function grabDoll(dolls){
// 	 var bag=[], doll;
// 	 for( doll of dolls ){
// 		  if( doll == "Hello Kitty" || doll == "Barbie doll" ) bag.push(doll)
// 		  else continue
// 		  if( bag.length > 2 ) break
// 	 }
// 	 return bag;
// }