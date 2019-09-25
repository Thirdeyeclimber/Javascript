var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celsius: ');
var degreesNum = Number(degrees);
var conversion = 5 / 9
var degreesCelsius = degreesNum - 32 * conversion;
var answer = Math.round(degreesCelsius)
console.log('It is ' + answer + ' degrees Celsius!');