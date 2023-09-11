const name ="satyajeet singh gusain"
const repoCount = 10

//console.log(name + repoCount + "values"); this is sintex is old.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // This is modern way of sintex we caleed us `string itepulation`.

// This  is one more method for gie string.


const gameName = new String(`satyajeet--singh--gusain`)

//console.log(gameName[0]);
//console.log(gameName.__proto__);  //The way exises prototype.

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(5));
//console.log(gameName.indexOf('t'));  

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2,4)
console.log(anotherString);


const newStringOne = "    stayajeet singh gusain     "

console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://satyajeetsinghgusain.com/satyajeet69singh"
console.log(url.replace('69', '-'))
console.log(url.includes('satyajeetsinghgusain'))

console.log(gameName.split('-'));

