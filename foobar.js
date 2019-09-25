var readlineSync = require('readline-sync')
var input = readlineSync.question('How many iterations of FooBar would you like to see? ');

for (var i = 1; i <= Number(input); i++) {
	if (i % 3 === 0 && i % 5 === 0) {
	console.log("FooBar!");
	}
	else if (i % 3 === 0) {
		console.log("Foo");
	}
	else if (i % 5 === 0) {
		console.log("Bar");
	}
	else {
		console.log(i);
	}
};

