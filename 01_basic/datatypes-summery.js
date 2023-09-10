// There are to types of datatypes numbers  (1) primitive datatypesc. (2)Non-primitive data types.
       
   //   (1)

//primitive datatypes

/*
 string = In string we can use numbers b/w the "123"

  number = In number normal numbers just like 123456. 

  boolean = In boolean types its is True or false only ..where True is denoted by 1 or false is denoted by 0. 
 
  Null = null means empty 
  
  undefined = means we not give variables
  
  symbol = symbol is using for spacefic number wahtwe want to specify.
  
  BigInt = we can say big numbers 

  */


       //    {2} 

// Reference (non primitivedatatypes)

// Array, Objects, function 


   //array = Always Denoted B/W [] square brectte.
   //objects= Always  denoted b/W {} curly brectte.


const id = Symbol('456')
const anotherId = Symbol('456')

console.log(id === anotherId);


const bigNumber = 3456987454666798754n

const heros =["satyajeet", "Thor", "doga"];
let myObj ={

         name:"satyajeet singh gusain",
         age: 23,

}

 const myFunction = function(){

    console.log ("HERO WORLD");

 }

 console.log (typeof Symbol);
