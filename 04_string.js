

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


console.log("================Replace()========================================================");
var greet="Good Morning";
const afterReplace=greet.replace("Morning","Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`=================toUpperCase()=================================================================`);
var greet="Good Morning";
var greetInUpperCase=greet.toUpperCase();
console.log(`${greet} in upper case is:${greetInUpperCase}`);


console.log(`=================toLowerCase()=================================================================`);
var greet="Good Morning";
var greetInLowerCase=greet.toLowerCase();
console.log(`${greet} in upper case is:${greetInLowerCase}`);

console.log(`=================trim()=================================================================`);
var str="   Trim Both Side   ";
console.log(str.trim());

var greet="   Good Morning   ";
var lengthBeforeTrim= greet.length;
console.log(`${greet} its length is: ${lengthBeforeTrim}`);

var greetAfterTrim=greet.trim();
var lengthAfterTrim= greetAfterTrim.length;
console.log(`${greetAfterTrim} its length is ${lengthAfterTrim}`);

console.log(`Total spaces removed is:${lengthBeforeTrim=greetAfterTrim}`);




console.log(`=================toString()=================================================================`);
var num=15;
console.log(num.toString());


console.log(`=================includes()=================================================================`);
var greet = "Good Morning";
 var result=greet.includes("nin");
 console.log(`Is string ${greet} includes word or 'nin'char:${result}`);

 var result=greet.includes("MoR");
 console.log(`Is string ${greet} includes word or 'MoR'char:${result}`);

console.log(`=================search()=================================================================`);
var greet = "Good Morning";
var result=greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result=greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`=================slice()=================================================================`);
var greet = "Good Morning";
 result=greet.slice(3,4);
 console.log(`Slice is ${result}`);

 result=greet.slice(3,10);
 console.log(`Slice is ${result}`);

 console.log(`=================split()=================================================================`);
var greet="Good Morning";
 var resultValue=greet.split(" ");
 console.log(resultValue);
 console.log(`Total words are:${resultValue.length}`);

 console.log("============================================================================");

 //write a function with name totalWord()with one argument 
 //"I am happy Buddy"
 //"I am learning JS the language of internet"
 //and this function should return the total numbers of words

 function totalWord(sentence){
    var words=sentence.split(" ");
    var totalWords=words.length;
    return totalWords;

 }
 var totalWords=totalWord("I am happy Buddy")
 console.log(`"I am happy Buddy" Total number of word is: ${totalWords}`);

 var totalWords=totalWord("I am learning JS the language of internet")
 console.log(`"I am learning JS the language of internet" Total number of word is: ${totalWords}`);
 