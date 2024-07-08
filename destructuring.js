/***
 * Destructureing for unpack object to variable
 * 
 * syntax:
 * 
 * let {data1,data2}= objectname;
 * 
 * 
 * destructuring for unpack array and other iterables
 *  
 * syntax:
 * 
 * let [data1,data2]=objectname;
 *
 *  
 */

const laptop ={
    
RAM : "DDR5",

Graphics :"nvidia",

SSD:512

};

let { RAM, Graphics}= laptop;
console.log(RAM+" "+Graphics);

//string destructuring
let data1= "javascript";
let [a1, m2, a3, a4, a5]= data1;
console.log(m2);

//Array Destructuring
const electronic =["Arudino", "Gas sensor", "PH sensor", "Raspberry pi", ];

let=[data1,data2,data3,data4]=electronic

console.log(data1+data2+data3+data4);

// Array skiped value

const electronics =["Arudino", "Gas sensor", "PH sensor", "Raspberry pi", ];

let=[data1,,,data4]=electronics

console.log(data1+" "+data4);

//Destructuring array positon values

const bike= ['tvs','dugatti','ninja h2','r15 v3','tirump','bussha'];

const { [0]:bike1, [0]:bike2} = bike;
console.log(bike1+" "+bike2);


//Array destructuring rst property

const num =[10,20,30,40,50,60,70,80,90,0,0,0,0,0,0,0,0,0,0,0];
const [a,b,...rest]=num;
console.log("a is"+a,"b is "+b+rest)


//map destructing
const code =new Map([
        ["ROYAL ENFIELD",30000],
        ["BMW",900000]

]);

let sap =" ";
for(const [key,values]of code)
{
    sap +=" "+key+" is"+values;
}
console.log(sap);


//swapping variable
let course1="FULSTACK";
let course2="DATA SCIENCE";

[course1,course2]=[course2,course1];
console.log(course1+" "+course2);