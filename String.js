// let data1 = "java is a  object oriented language";
// let data2='and also a "severside language-" ';
// let data3= 'it is widely used by the wide range of "developers" ';
// console.log(data1+" "+data2+" "+data3);

// let data1 = "java is a  object oriented language";
// console.log(data1.length);


//==operators


//object can not be copared in the string-->flase
// string can be compared with a string
// let data1= new String("javascript");
// let data2= new String("javascript");
// console.log(data1===data2);

//string methods
/***
 * String length()
 
 * String char()
 * String charCodeAt()
 * String at()
 * String []
 * String slice[]
 * String substring()
 * String substr()
 * String toUpperCase()
 * String toLowerCase()
 * String concat()
 * String trim()
 * String trimStart()
 * String trimEnd()
 * String padStart()
 * String  padEnd()
 * String  repeat()
 * String replace()
 * StringreplaceAll()
 * String split()
 * 
 * 
 * 
 * 
 */

//String length()
let sample = "javascript";
let letter = sample.at(4);
let data = sample.slice(0,4);
let sample1="    java sript   "
let sample3=sample1.trimEnd();
let sample4= sample1.trimStart()
let sample2= sample1.trim();
let data1= "8";
let sample10 = data1.padStart(4,"------");
let sample11 = data1.padEnd(4 , "%%%%");
let sample12= sample.replace("'World', 'JavaScript'");
let sample15= sample.replaceAll("javascript", "html");
let sample16= sample.split("v");
let sample17 = sample.repeat(3);
console.log(sample.length);

//String charAt()
console.log(sample.charAt(0))


// String charCodeAt()
console.log(sample.charCodeAt(0));

//string at()
console.log(sample.at(5));

////string padstart

console.log(sample10);

/// string padend
console.log(sample11);

// string trim()
 
console.log(sample2);

//string trimstart()

console.log(sample3.length);

//string trimend

console.log(sample4.length);

//string 


