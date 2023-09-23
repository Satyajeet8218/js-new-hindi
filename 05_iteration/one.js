                                             
                       //for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element);
}

for (let i = 0; i <= 25; i++) {
    const element = i;
    if(element == 10){
    
     // console.log("10 is best number");

    }
   // console.log(element)
    
}

for (let i = 1; i <=10; i++) {

   //console.log(`Outer loop value: ${i}`);

     for (let j = 1; j <=10; j++) {

      console.log(`Inner loop value ${j} and inner loop ${i} `);
       // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray =["Thor", "Batman", "Gorilla"]

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];

  //  console.log(element);
    
}

                             //break and continue



for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    //console.log(`Value of I is ${index}`);
    
}


for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`Detected 5`);
        continue
    }
   // console.log(`Value of I is ${index}`);
    
}



                            //while loop

let index = 0

while (index <= 10) {
  console.log(`Value of index is ${index}`);
 index = index + 2
}


let myLoop = ['flash', 'saktiman', 'haktiman']

let arr = 0
while(arr < myLoop.length) {

//console.log(`value is ${myLoop[arr]}`);
arr = arr + 1
}


//                    Do while loop


let score = 1
do {
    
    console.log(`Score is ${score}`);
    score++

} while (score <= 10);