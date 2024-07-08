//scope-->2 types
/*
1) Block scope
    *global scope
    *function scope
    -->let,const
2) Global scope
*/

/*

NOTE:

-->Before ES6 -->introduced in 2015 there is no block scope concept

-->javascript has global scope and function scope

*/

// syntax:
/*
{
    variable variable_name=value; //variable(let,const)
}

*/

var a = 89;
{
    var a=10;
    
    console.log(a);
}

let b = 100
{
    let b = 20;

    console.log(b);
}
const h = 47;
{
    const h = 12;
    console.log(h);
}

/*
--> let and const have block scope
--> let and const cannot be redeclared
--> let and const must be declared before use
--> let and const cannot bindto "this"
--> let and const are not hoisted

*/

