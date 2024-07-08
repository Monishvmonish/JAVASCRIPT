

// variable creation 
// let cpu = "to cpu";

// cpu = {board: "motherboard" , RAM:"DDR4" , Core: "Intel"};// object literal;
// console.log("the parts in cpu:"+" "+cpu.RAM +" "+ cpu.Core +" " + cpu.board);

/***
 * notes
 * define object in javascript;
 * --->using an object literal
 * --->using the new keyword
 *---->using an object constructor 
 */
//  cpu=
//            {board: "motherboard",
//          RAM:"DDR4" ,
//         Core: "Intel"};



//       cpu= {};
//           cpu.board= "motherboard";
//        cpu.RAM = "DDR4";
//      cpu.Core="intel";
      

   //   let cpu = new Object();
   //   cpu.RAM="DDR4";
   //   cpu.Core="Intel";
   //   cpu.board="Motherboard";

     ///----------------------------------------------------
   //   console.log(cpu.board);
   //   console.log(cpu.RAM);
   //   console.log(cpu.Core);

   // to access the object 
   //   console.log(cpu["RAM"]);
   //   console.log(cpu["Core"]);
   //   console.log(cpu["board"]);

//    cpu=
//    {board: "motherboard",
//  RAM:"DDR4" ,
// Core: "Intel"};

// adding the object property

// cpu.graphicscard="amd nvidia";
// cpu.brand="DELL"
// console.log(cpu.graphicscard);
// console.log(cpu.brand);
// delete cpu.graphicscard,cpu.brand;        
// console.log(cpu.graphicscard,cpu.brand);
//----dleteing the object
//  delete  cpu["graphicscard"];
//  console.log(cpu.graphicscard);

 //----------------------------------------------object nesting
 cpu=
 {
   board: "motherboard",
RAM:"DDR4" ,
Core: "Intel",
brand:'INSPIRON3511',
company:'dell',
 monish:function(){
return this.company+" "+this.brand+" "+this.RAM+ " "+this.company;

}
 };

// system:{ s1:"dell",
// s2:"hp",
// s3:"acer"
// }
// };
//console.log(cpu.monish());
// console.log(cpu.system.s2 + " " +cpu.system.s1 + " " +cpu.system.s3);
// console.log(cpu.system["s1"]);


//-------OBJECT CONSTRUCTOR FUNCTIONS
//------>create many objects of same types
///----->to create object type use an object constructor 
//--->name constructor function with  first letter uppercase.

///Construct  function with system object
/*function System(board, brand, RAM, company){
   this.board = board;
   this.brand = brand;
   this.RAM = RAM;
   this.company = company;
   // this.fullsetup= function(){
   //    return this.board;
     
      
   
      
   // }


};

let cpu = new System("motherboard", "INSPIRON3511","DDR4","DELL");
// console.log(cpu.RAM+" "+cpu.board+" "+cpu.company);
System.prototype.changeGraphics = function(graphicsname){
   this.RAM = graphicsname;
 }
 cpu.changeGraphics("DDR5");


console.log(cpu.RAM);
*/


/**
 * javascript accessors getters and setters get() ----read
 * 
 */

cpu={

board: "motherboard",
RAM:"DDR4",
Core:"intel",

get monish(){
   return this.RAM+" "+this.Core+ " " +this.board.toUpperCase();
}
};
console.log(cpu.monish);



//setter---set()---->write

// cpu={

// board: "motherboard",
// RAM:"DDR4",
// Core:"intel",

// set monish(value) {
//    this.RAM = value;
// }
// };

// // set property
// cpu.monish="nvee4";
// console.log(cpu.RAM);


// let ar1 = {counter : 0};
// Object.defineProperty(ar1, "reset",{
//    get:function() {this.counter = 0}

// });
// Object.defineProperty(ar1, "increment",{
//    get:function() {this.counter++}

// });
// Object.defineProperty(ar1, "decrement",{
//    get:function() {this.counter--}

// });
// Object.defineProperty(ar1, "add",{
//    set:function(monish) {this.counter+=monish}
   

// });
// Object.defineProperty(ar1, "sub",{
//    set:function(monish) {this.counter-=monish}
   

// });
// Object.defineProperty(ar1, "mul",{
//    set:function(monish) {this.counter*=monish}
   

// });
// Object.defineProperty(ar1, "div",{
//    set:function(monish) {this.counter/=monish}
   

// });
// Object.defineProperty(ar1, "modulus",{
//    set:function(monish) {this.counter%=monish}
   

// });



// ar1.reset;
// ar1.add = 8;
// ar1.sub = 5;
// ar1.mul = 8;
// ar1.div= 3;
// ar1.modulus = 4;
// ar1.increment;
// ar1.decrement;
// console.log(ar1.counter);



