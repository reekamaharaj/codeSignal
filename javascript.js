// Write a function that returns the sum of two numbers.

function add(param1, param2) {
	return param1 + param2;
}

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
	let cent = 0;
	let remainder = 0;
	if (typeof year == "number") {
		cent = year / 100;
		remainder = year % 100;

		if (remainder === 0) {
			return cent;
		} else {
			cent = (year - remainder) / 100;
			return cent + 1;
		}
	} else {
		console.log("This is not a number");
	}
}

//Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
	let reverse = inputString.split("").reverse().join("");
	if (reverse === inputString) {
		return true;
	} else {
		return false;
	}
}

//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {
	let product = 0;
	let productArray = [];
	for (let i = 0; i < inputArray.length; i++) {
		product = inputArray[i] * inputArray[i + 1];
		if (isNaN(product) === false) {
			productArray.push(product);
		}
	}
	return Math.max(...productArray);
}
