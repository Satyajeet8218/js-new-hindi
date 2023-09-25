// For OF  Loop // 

const arr = [ 1, 2, 3, 4, 5]
for (const num of arr) {

    //console.log(num);
    
}

    //for of loop with string

const greetings ="Hello world"
for (const greet of greetings) {
    
   // console.log(`Each character is${greet}`);

}


                    //maps

   const map = new Map()
   map.set('Bha', "Bharat")                 
   map.set('USA', "United State of America")                 
   map.set('Fra', "France")                 

//console.log(map);

for (const key of map) {
   // console.log(key);
}

for (const [key, value] of map) {          //short cut

  //  console.log(key, ":-", value);
    
}


