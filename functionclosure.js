//gobal variable
dataFunction();
function dataFunction() {
    let x= 8;// local variable
    console.log(x * x);
}

// variable as global
let a=10;
function sapfunction(){
    
    console.log(a+a);
}
 console.log(a+a);

 // counter using global variable
//  let counter = 0;
//  function add(){
//     counter += 2;
//  }
//  add();
//  add();
//  add();
//  console.log("the counter is "+counter);

 //nested functin()
 console.log(add());
 function add()
 {
let counter=0;
function plus(){
counter += 1;
}
plus();
plus();

    return counter;

 }


 let data ="Browse openai.com";
 let pattern = /openai.com/i;
 let result = data.match(pattern);
 console.log(result);
//syntax 
// pattern /modifier(s);
/**
 * /g-->perform a global match (find all)
 * /i-->perform case -insensitive matching
 * /m-->perform multiline matching
 */
/**
 * syntax
 * /pattern/modifier(s);
 */



/**
 * modifiers used
 * 1. /g-->perform a global match(find all)
 * 2. /i-->perform case-insensitive matching
 * 3. /m-->perform multiline matching
 */
/**
 * Brakets
 * 1. [abc]--> find any character between the brackets
 * 2. [^abc]--> find any character not between the brackets
 * 3. [0-9]--> find any character between the brackets(any digits)
 * 4. [^0-9]--> find any character not between the brackets(any non-digits)
 * 5. (x|y)--> find any of the alternatives specified
 */

 let info = "javascript code with java name ";
 let pattern1= /[v]/g;
 let result1 = info.match(pattern1);
 console.log(result1);

 //[^abc]
 let info1 ="javascript language with intial as java name"
 let pattern2= /[^a/]/g;
 let result2=info.match(pattern2);
 console.log(result2);
 