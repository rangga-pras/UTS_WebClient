const fahrenheitToCelsius = require('./fahrenheitConverter');
const convertLength = require('./lengthConverter');
const isEven = require('./oddEven');
const removeFirstOccurrence = require('./removeString');
const isPalindrome = require('./palindrome');

console.log("Fahrenheit to Celsius:", fahrenheitToCelsius(100));
console.log("Length Converter:", convertLength(100000));
console.log("Is 1000 even?", isEven(1000));
console.log("Is 1001 even?", isEven(1001));
console.log("Remove 'ell' from 'Hello world':", removeFirstOccurrence("Hello world", "ell"));
console.log("Is 'madam' a palindrome?", isPalindrome("madam"));
