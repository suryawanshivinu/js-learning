

console.log("=================STEP 1====================================");
function Narendra(){
    console.log("Narendra");

}
Narendra();
function Modi(){
    console.log("Modi");
}
Modi();

console.log("=============STEP 2=============================================");
function personalDetails(firstName,lastName,collegeName){
    console.log("Arguments:",firstName,lastName,collegeName);
    var result1=firstName;
    console.log("My first name is:",result1);
    var result2=lastName;
    console.log("My last name is:",result2);
    var result3=collegeName;
    console.log("My college name is:",result3);
    
    
}
personalDetails("Vinayak","Suryawanshi","Modern College");

console.log("=============STEP 3======================================");
function swapValues(arg1,arg2){
    console.log("Before swapping:",arg1,arg2);
     
    var temp=arg1;
     var arg1=arg2;
    var arg2=temp;
    console.log("After swap:",arg1,arg2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("=============STEP 4==================================================");
function addThreeValues(num1,num2,num3){
console.log("Arguments:",num1,num2,num3);
var result=num1+num2+num3;
console.log("Addition is:",result);
}
addThreeValues(10.23,600,40);
addThreeValues(" Hello"," Good"," Morning");


console.log("=================STEP 5===============================================");
function bankDetails(bankName,accountNum,location,pincode){
    
        var result1="bankName ";
        var result2="accountNum ";
        var result3="location ";
        var result4="pincode";
        console.log("Bank name is:",bankName,"Account no.is:",accountNum,"Location is:",location,"Pincode is:",pincode);

}
 bankDetails("CITI Bank","3456782345","Pune","431202");
 bankDetails("Axis Bank","7856782345","Mumbai","441202")
 bankDetails("HDFC Bank","8956782345","Pune","631202")