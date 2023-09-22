const userEmail = "satyajeet21230"  // Truthy or falsy value.

if(userEmail) {
     
    console.log("Got user email");

}else {

    console.log("don't have user email");
}

//There are some falsy values

//  false, 0, -0, BigInt 0n, ""(empty string), null, undefined, NaN. these all are falsy values.

//There are also some truthy values

//  "0"(under the string if there is Zero is truthy value), 'false', " "(space on string), {} object, array[], function(){}.

//array detect

const array = []
if (array.length === 0) {

    console.log("Array is empty");
}

 //object detect

 const object = {}
if (Object.keys(object).length === 0) {

console.log("object is empty");

}