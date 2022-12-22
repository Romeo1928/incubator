function checkObj( obj, checkProp) {
	// Your Code Here
	if (obj.hasOwnProperty(checkProp)){
		return obj[checkProp]; // If true return the prop
	}
	else {
		return "Not Found";
	}

}

// Test your code by modifying these values
