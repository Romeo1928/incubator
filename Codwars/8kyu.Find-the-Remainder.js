// https://www.codewars.com/kata/524f5125ad9c12894e00003f

function remainder(n, m) {
	// Divide the larger argument by the smaller argument and return the remainde
	if (n > m) {
		return n % m;
	} else {
		return m % n;
	}
}