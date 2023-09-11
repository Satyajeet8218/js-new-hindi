const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const otherNumber = 123.6896
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000          // this is using in uSA style values.
console.log(hundreds.toLocaleString());

const hundreds = 10000000         // using Indian style values.
console.log(hundreds.toLocaleString('en-IN'));



//.........................................MATHS....................................................//


 
 
console.log(Math);
console.log(Math.abs(-4));               //It will give us positive 4.
console.log(Math.round(5.6));            // Outcome will be 6.
console.log(Math.ceil(4.2));           // Outcome will be 5.
console.log(Math.floor(4.2));           // Outcome will be 4.
console.log(Math.min(4,3,5,9));       //output will be 3.
console.log(Math.max(4, 3, 5, 9));      // Output will be 9.


console.log(Math.random());  // In random value will alwys come ito b?w 0 to 1.
console.log(Math.floor(Math.random()*10 ) +1);

const min = 10
const max = 20
 console.log(Math.random()* (max - min + 1)) 

console .log(Math.floor(Math.random()*(max - min +1)) +min)

