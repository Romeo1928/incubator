// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript

function htmlspecialchars(formData) {
	 // Insert your code here
	 return formData
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
}