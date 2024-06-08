let str1='Mubashira';
let str2='Tanveer';
let num1= 5;
let num2= 10;
let arr=["chips","juice","milk"];

// Test for equality and in equality with string
console.log('\n Test for equality and inequality with string')
console.log(str1 == "Mubashira");
console.log(str1 == str2)
// Test using the lower case function
console.log('\n Test using the lower case function')
console.log(str1.toLowerCase()=== 'Mubashira')
console.log(str2.toLowerCase()!= 'Tanveer')

// Numericals tests
console.log("\n Numericals tests ")
console.log(num1 < 10 )
console.log(num1 >= num2)
console.log(num1 !==  123)
console.log(num2 <= num1)

// Tests using "and" and "Or" operator
console.log("\n Tests using 'and' and 'Or' operator");
console.log((num1 < num2) && (num1> num2));
console.log((str1== str2)||(num1 !< 56));
 
// Test weather an item is in an array
console.log("\nTest weather an item is in an array ");
console.log(arr.includes('fruits'));
console.log(arr.includes('chips'));

// Test weather an item is not in an array
console.log("\n Test weather an item is not in an array");
console.log(!arr.includes('ketchap'));
console.log(!arr.includes('milk'));

