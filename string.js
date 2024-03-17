

var greet="Good Morning";
var totalCharacters= greet.length;
console.log("Total no. of characters is:",totalCharacters);

var charAt0= greet.charAt(0);
console.log("Character at index 0 is:",charAt0);

var charAt6= greet.charAt(6);
console.log("Character at index 0 is:",charAt6);

var charAt11= greet.charAt(11);
console.log("Character at index 0 is:",charAt11);

var sentence= "You have to pay required fees amount on same day once you get the payment link on your own group";
var totalChars= sentence.length;
var lastChar= sentence.charAt(totalChars-1);
console.log("Last Char is:",lastChar);

console.log("===============Index of ()====================================================");

var greet="Good Morning";
var indexOfM= greet.indexOf("M");
console.log("Index of char M is:",indexOfM);

console.log("===============Concat()====================================================");
var firstName= "Vinayak";
var lastName=" Suryawanshi";
var resultConcat= firstName.concat(lastName);
console.log("concat result is:",resultConcat);
