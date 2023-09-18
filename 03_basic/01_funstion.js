/*
function sayMyName(){

    console.log("afsdb");
    console.log("fsdb");
    console.log("aphh");
    console.log("sdgjmb");
    console.log("ijh4h54");
    console.log("7uu");
    console.log("ronalod");
    console.log("akjfhjkhgkjg");
    
}
*/

//sayMyName()  // sayMyName is refrence of fuction or ()peranthisisis the Exicute of function.


//In this  function  number1 or number2 is perimeters.

function addTwoNumbers(number1, number2){

      console.log(number1 + number2);
}

//addTwoNumbers(10, 10)  // Under the bracet numbers (10, 10) are called as Arguments when give call.

//addTwoNumbers(10, "10")

const result = addTwoNumbers(10, 10)
//console.log("result:", result);

    //method for print result

   // function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result
    //console,log("satyajeet singh gusaim");  // after declare result we can't print other value.
//}


//function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //console.log("satyajeet singh gusain")  // That time it will print because it is upto the result.
   // return result
//}

 //on more shortcut for get result.

 function addTwoNumbers(number1,number2){

    return number1 + number2

 }

   // How we can take values.

 function  loginUserMessage(username = "sonu"){
    if(username === undefined){                        // (!) usefull it will convert true to false and vice varsa.
        console.log("please enter a username");
        return
    }

  return `${username} justlogged in`

 }

// console.log(loginUserMessage("satyajeet singh gusain"));

 // console.log(loginUserMessage("satyajeet singh gusain"));    // If we will not give values then it will print as undefined.


    //function to to make a shopping card and many more .


    //function calculateCartPrice(...num1){    // (....) it is called as rest operator.

      //return num1
   // }

   // console.log(calculateCartPrice(200, 300, 400, 500));


    function calculateCartPrice( val1, val2, ...num1){

      return num1
    }


    //console.log(calculateCartPrice(200, 300, 400, 500));


         //how to pass object.

    const user = {
   
      username: "satyajeet singh gusain",
      price: 500
    }

    function handObject(anyobject){

     console.log(`username is ${anyobject.username} and  PRICE is ${anyobject.price}`);

    }

    //handObject(user)
   
    handObject({

      username: "sonu",
      price: 299

    })

    
   // how to pass array

   const myNewArray = [200, 400, 500, 600]
   function retunSecondValue(getArray){
    
        return getArray[1]
   }

   console.log(retunSecondValue(myNewArray));
   console.log(retunSecondValue([200, 400, 500, 600]));

