var readlineSync = require('readline-sync')

function ordinal(response) {
	var num = Number(response);
	console.log(num);
	var rightDigit = num % 10;
	var rightTwoDigits = num % 100;
	if (rightTwoDigits > 10 && rightTwoDigits < 14) {
		return response + "th";
	}
	else if (rightDigit === 1) {
		return response + "st";
	}
	else if (rightDigit === 2) {
		return response + "nd";
	}
	else if (rightDigit === 3) {
		return response + "rd";
	}
	else {
		return response + "th";
	}
};

var response = readlineSync.question('Enter a Number: ');
console.log("Stop, That's the " + ordinal(response) + " time you've done this!");