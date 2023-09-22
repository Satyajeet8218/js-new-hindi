
// control flow also known as logical flow.

//if

const isUserLoggedIn = true
if(isUserLoggedIn){
    
}

const temperature = 41

//if (temperature < 51){

    //console.log("less than 51");
//}

//console.log("temperature is greater than 51");

/*if(temperature === 40){

    console.log("less than 56");

} else{

    console.log("temperature is greater than 50");
}

console.log("Excute all time")

*/

//There are some operator of coparision

//   <, less then
//   >,greater then
//   <=, similar  for less then
//   >=, greatern then for similar number.
//   ==,  it is equal to
//   !=, does it is equal to secoond number. it is a question format answer should be  true or false format.
//   ===, equal to and also check a types.(strickt equal) 
//  !==, it check a nagitive side.


/*
const score = 500

if (score > 200){

   const power = "fly"   //Var is global scope.tha why second Console.log is also excute. 
   console.log(`User power:${power}`); 
}

console.log(`User power:${power}`); 
*/

//short hand notetion

//const balance = 1000

//if(balance > 500) console.log("Test");  //Implecent scope "assuming this is scope"



/*

if (balance < 500){

    console.log("less than 500");
} else if(balance < 750){

    console,log("less tham 750");
} else if (balance < 900){

    console.log("less than 900");
} else {

    console.log("Less than 1200");
}

*/


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){   // '&&' and operator In this every condition wants true.

    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail) {  // "||" or operaton In this should be one condition is true.  

    console.log("User logged in");
}


//Nullish  Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);


// Terniary Operator

//condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");