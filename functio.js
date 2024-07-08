/**
javascript function defined with function keyword
followed by name by parameters



syntax:

function name (parameter1, parameter2, parameter3)
{
    statement;
    return variable name;
}
 */

// let a = list1(5 , 8 , 6);
// console.log(a);

// function list1(x, y, z){
//     return x+y+z;
// }
 

/*


note
if  the variable is declared inside the function is caled as local;
if  the variable is declared outside the function is caled as global;
*/


// local variable  
// function mon(){
//     let bikename="r15,bmw,pulser,ducati";
//     console.log(bikename);
// }
// mon();



// function call  method ---->call
// let System = {
     
//     fullSetup: function() {
//         return this.RAM+" "+this.CORE;
//     }
// }
// let s1 = {
//     RAM:"ddr5",
//     CORE:"intel"
// }

// let s2 ={
//     RAM:"nvee",
//     CORE:"intelcore i5"
// }
// console.log(System.fullSetup.call(s1));
// console.log(System.fullSetup.call(s2));

/**
 * function apply method --->apply
 */
// let System = {
     
//     fullSetup: function() {
//         return this.RAM+" "+this.CORE;
//     }
// }
// let s1 = {
//     RAM:"ddr5",
//     CORE:"intel"
// }

// let s2 ={
//     RAM:"nvee",
//     CORE:"intelcore i5"
// }
// console.log(System.fullSetup.apply(s1));
// console.log(System.fullSetup.apply(s2));

/***
 * difference between call and apply
 * ----> call() method takes argument seperately
 * --->apply() method the argurmnt as an a array
 */
// let System = {
     
//     fullSetup: function(RAMnew, newcore) {
//         return this.RAM+" "+this.CORE+" "+RAMnew+" "+newcore;
//     }
// }
// let s1 = {
//     RAM:"ddr5",
//     CORE:"intel"
// }

// let s2 ={
//     RAM:"nvee",
//     CORE:"intelcore i5"
// }
// console.log(System.fullSetup.apply(s1,  ["DDR5", "intel-i5"]));
// console.log(System.fullSetup.apply(s2));

//function bind
//  let System = {
     
//     fullSetup: function() {
//         return this.RAM+" "+this.CORE;
//     }
// }
// let s1 = {
//     RAM:"ddr5",
//     CORE:"intel"
// }

// let s2 ={
//     RAM:"nvee",
//     CORE:"intelcore i5"
// }
// let fs1 = System.fullSetup.bind(s1);
// console.log(fs1());


/**
 * time--->setTimeout()
 * 
 */
// let system = {
     
//     fullSetup: function() {
//     return this.RAM+" "+this.CORE;
//     }
// }``
// console.log(fullSetup());

/***
 * Arrow Function 
 */
    // let data = (a,b,c)=> a*b*c;

    // console.log(data(7,2,4));



    //Arrow function with 
    //     let a = data1(5,8,6);
    // console.log(a);

    // function data1(x,y,z) {
    //     return x*y+z;
    // }

    // Arrow function with parameters
    //  let sap =" ";
    //  sap=(val) => "java"+val;
    //  console.log(sap("script"));


     //Arrow Function Without Paranthesis----()
     
     let sap =" ";
     sap=val => "javascript is a "+val;
     console.log(sap("scripting  language"));

     