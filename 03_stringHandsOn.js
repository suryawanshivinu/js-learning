


   function stringHandsOn(){
    var sentence="   Hey you afre doing good, keep it up   ";
    console.log(`Step 1:Given string is:${sentence}`);

    var lengthBeforeTrim =sentence.length;
    console.log(`Step 2:Length of given string is:${lengthBeforeTrim}`);
     
    var lengthAfterTrim=sentence.trim();
    var lengthAfterTrim=lengthAfterTrim.length;
    console.log(`Step 3: Length of string after triming: ${lengthAfterTrim}`);

    console.log(`Step 4:Total no of spaces removed after spaces is:${lengthBeforeTrim-lengthAfterTrim}`);
    
     
    var lengthAfterTrim=sentence.trim();
    var charAt0= lengthAfterTrim.charAt(0);
    console.log(`First character of sentence after trim is:${charAt0}`);
     
    var totalChars=lengthAfterTrim.length;
    var lastChar=lengthAfterTrim.charAt(totalChars-1);
    console.log(`Last character of sentence after trim is:${lastChar}`);
      
    var totalWords=lengthAfterTrim.split(" ");
    console.log(`Total no of words available in string:${totalWords.length}`);

    indexofGood=lengthAfterTrim.indexOf("good");
    console.log(`Index of word "good" is:${indexofGood}`);
    
     
    var result=lengthAfterTrim.substring(22);
    console.log(`Substring starting from index 22 is:${result}`);

     
    var result=lengthAfterTrim.includes("up");
    console.log(`Check string end with "up" after trim:${result}`);
    
     
    var result=lengthAfterTrim.includes("Hey");
    console.log(`Check string start with "Hey" after trim:${result}`);


   }
   stringHandsOn()