/* 
arithmetic operstors
assignment operators
comparison operators
string
bit wise
ternary
type
*/
  /*
  arithmetic 
  +
  -
  *
  /
  %
   increment
   decrement
  */
a =  8;
b = 6;
c = (a++ + b++) ;
console.log(a);
console.log(b);

n=10;
y= --n;
console.log(y);
 

d=78;
j = ++d;
console.log(j);

g=10;
p=50
for(g=0;p<=g;g++);



/*
comparison operator ("> < >= <= == === != !==");
*/


a=10;
b=20
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);
console.log(a!==b);
console.log(a!=b);




m=40;
n=90;
if(m>n)
{
    console.log("true");
}
else
{
    console.log("flase");
}

if(m<n)
{
    console.log("true");
}
else
{
    console.log("flase");
}

if(m<=n)
{
    console.log("true");
}
else
{
    console.log("flase");
}

if(m>=n)
{
    console.log("true");
}
else
{
    console.log("flase");
}


if(m==!n)
{
    console.log("true");
}
else
{
    console.log("flase");
}

if(m=!n)
{
    console.log("true");
}
else
{
    console.log("flase");
}


if(m===n)
{
    console.log("true");
}
else
{
    console.log("flase");
}

/*
assignment operator
=, +=, -=, *= /=, %=, **=


*/
// ternary operators-->
l=5;
q=8;
l+=q;
console.log(l);
 /*
    
logical operator  && ,||, !;


 */

/*
 String operator  
 */

let data1= "A";
let data2= "B";
let result = data1 < data2;
console.log(result);



let data3= "A";
let data= "B";
let res =(data3 < data) && (data3 < data);
console.log(res);

// string addition (concatination)
let sap1= "monish";
let mon="kumar";
let sap3= sap1+" "+mon;
console.log(sap3);

// bitwise operators 
/* &  | ~ ^ << >> >>> 
and ,or,not,xor
 <<--shifleft >>>shift right
 8   4  2   1
 0   1  0   1
8---`1000--->0111
8----> -8

*/

