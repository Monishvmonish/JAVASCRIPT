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

//array lastIndexOf()

console.log(fruits.lastIndexOf("greenapple"))
 

// array includes()

console.log(fruits.includes("apple"))

// array findindex()

let number=[1,2,3,4,5,13,44];

let number2=number.findIndex( element => element <10);
console.log(number2);
// array lastindex

let number4 =number.findLast(element => element <5);
console.log(number4)

//----------------------array sorting---------//
/**
 * -->array sort()
 * --->array reverse()
 * ---->array toSorted()
 * ---> arrya toReverse()
 *
 */

let array=["monish","nirmal","dhanush","williams","robert",'james',]
console.log(array)
console.log(array.sort())
console.log(array.reverse())
console.log(array.toSorted())
console.log(array.toReversed())
//console.log(array.toReverse())

let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.toReversed();
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
console.log(arr); 



let rev=[1,2,3,4,5,6,7,8,9]
let revdata = rev.toReversed();
console.log(revdata);
console.log(rev)





