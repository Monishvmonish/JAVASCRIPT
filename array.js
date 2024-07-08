//let computer =[" monitor","mouse","keyword","cpu", "ram", "ssd"];
// let computer =[];
// computer[0]="montior";
// computer[1]="mouse";
// computer[2]="keyword";
// computer[3]="cpu";
// console.log(computer);

// console.log(computer[3]);

// to change the element in the array
let ram = new Array("DDR3", "DDR4","DDR5");
ram[0] = "ddrx";
ram[1] = "ddrx78";
ram[2] = "ddrx90";
console.log(ram);
// array to string
var RAM = [ "ddr3", "ddr4", "ddr5"];
console.log(RAM.toLocaleString());



/**ARRAY METHODS
    * array length
    * array .tostring()
    * array push()
    * array pop()
    * aray join()
    * array at()
    * array shift()
    * array unshift()
    * array delete()
    *  array concat()
    * array flat()
    * array splice()
    * array slice() 
    * 
*/



// ARRAY TO STRING
var RAM = [ "ddr3", "ddr4", "ddr5", ];
var RAM1=["1425665"]
var RAM2=["bgcitn"]
var RAM67=[[90],[78],[78],[90]]


RAM.push("DXXX");
//  RAM.pop();
// ARRAY SHIFT
RAM.shift()
// ARRAY UNSHIFT
RAM.unshift("RYZEN")
// ARRAY JOIN

console.log(RAM.toString());
//ARRAY LENGTH
console.log(RAM.length);



// ARRAY AT()
console.log(RAM.at(2));



console.log()
// array shift()


/// ARRAY JOIN()
console.log(RAM.join("--------"))


//delete
delete RAM [1];
console.log(RAM)
console.log(RAM.concat("GNEYYGVOHN"))



//ARRAY FLAT
console.log(RAM67.flat())


// ARRAY SPLICE()
var ROM=["SSD","HDD","HH","HH"];
ROM.splice(0,1,"M")
console.log(ROM);

//SPLICE()
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');
console.log(arr);

//SLICE
var num=[1,2,3,4,5,6];
var newnum=num.slice(1,5);
console.log(newnum);

//array unshift
let arr1 = [2, 3, 4];
arr.unshift(1);
console.log(arr1);

//shift
let arr2 = [1, 2, 3, 4];
arr.shift();
console.log(arr2);



//--------------------------------------array methods----->
/* let arr = [1, 2, 3, 4];
console.log(arr.length); // Output: 4
array.toString():

let arr = [1, 2, 3, 4];
console.log(arr.toString()); // Output: "1,2,3,4"
 
array.push():


let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]
AI-generated code. Review and use carefully. More info on FAQ.
array.pop():
JavaScript

let arr = [1, 2, 3, 4];
arr.pop();
console.log(arr); // Output: [1, 2, 3]
AI-generated code. Review and use carefully. More info on FAQ.
array.join():
JavaScript

let arr = [1, 2, 3, 4];
console.log(arr.join('-')); // Output: "1-2-3-4"
AI-generated code. Review and use carefully. More info on FAQ.
array.at():
JavaScript

let arr = [1, 2, 3, 4];
console.log(arr.at(2)); // Output: 3
AI-generated code. Review and use carefully. More info on FAQ.
array.shift():
JavaScript

let arr = [1, 2, 3, 4];
arr.shift();
console.log(arr); // Output: [2, 3, 4]
AI-generated code. Review and use carefully. More info on FAQ.
array.unshift():
JavaScript

let arr = [2, 3, 4];
arr.unshift(1);
console.log(arr); // Output: [1, 2, 3, 4]
AI-generated code. Review and use carefully. More info on FAQ.
delete array[index]:
JavaScript

let arr = [1, 2, 3, 4];
delete arr[2];
console.log(arr); // Output: [1, 2, undefined, 4]
AI-generated code. Review and use carefully. More info on FAQ.
array.concat():
JavaScript

let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4]
AI-generated code. Review and use carefully. More info on FAQ.
array.flat():
JavaScript

let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
AI-generated code. Review and use carefully. More info on FAQ.
array.splice():
JavaScript

let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');
console.log(arr); // Output: [1, 2, 'a', 'b', 4]
AI-generated code. Review and use carefully. More info on FAQ.
array.slice():
JavaScript

let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);
console.log(newArr);*/


/**
 * array search methods
 * --->array  index()
 * ---->array lastindexof()
 * --->array includes()
 * ---->array find()
 * --->array findIndex()
 * --->array findlast()
 * ---->array findLastIndex()
 */


/**
 * 
 * 
 * array.indexOf():
JavaScript

let arr = ['apple', 'banana', 'cherry'];
console.log(arr.indexOf('banana')); // Output: 1
AI-generated code. Review and use carefully. More info on FAQ.
array.lastIndexOf():
JavaScript

let arr = ['apple', 'banana', 'cherry', 'banana'];
console.log(arr.lastIndexOf('banana')); // Output: 3
AI-generated code. Review and use carefully. More info on FAQ.
array.includes():
JavaScript

let arr = ['apple', 'banana', 'cherry'];
console.log(arr.includes('banana')); // Output: true
AI-generated code. Review and use carefully. More info on FAQ.
array.find():
JavaScript

let arr = [5, 12, 8, 130, 44];
let found = arr.find(element => element > 10);
console.log(found); // Output: 12
AI-generated code. Review and use carefully. More info on FAQ.
array.findIndex():
JavaScript

let arr = [5, 12, 8, 130, 44];
let index = arr.findIndex(element => element > 10);
console.log(index); // Output: 1
AI-generated code. Review and use carefully. More info on FAQ.
array.findLast():
JavaScript

let arr = [5, 12, 8, 130, 44];
let foundLast = arr.findLast(element => element > 10);
console.log(foundLast); // Output: 44
AI-generated code. Review and use carefully. More info on FAQ.
array.findLastIndex():
JavaScript

let arr = [5, 12, 8, 130, 44];
let lastIndex = arr.findLastIndex(element => element > 10);
console.log(lastIndex); // Output: 4
 */


//array indexof
let fruits=["apple","nuts","plums","bananas","greenapple","kiwi"]
console.log(fruits.indexOf("kiwi"))