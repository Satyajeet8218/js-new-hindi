const user = {
usernamne: "satyajeet singh gusain",
price: 1000,

welcomeMessage: function(){   // 'This' It refer current content.

    console.log(`${this.usernamne}, welcome to website`);
    console.log(this);

}


}

//user.welcomeMessage()

//user.usernamne = "sonu"
//user.welcomeMessage()

//console.log(this);

//function chai(){
    //let username = "satyajeet singh gusain "
  //  console.log(this.username);

//}

//chai()


/*
const chai  = function() {
    let username = "sonu"
    console.log(this.username);
}
*/

const chai  = () => {          
    let username = "sonu"
    console.log(this);
}

//chai()



//arrow function

() => {}   //` => this is called arrow function.`

//const addTwo = (num1, num2) => {

 //   return num1 + num2          // basic arrow function.

//}
//console.log(addTwo(5, 10))


//const addTwo = (num1, num2) => (num1 + num2)          // Implicet return       

const addTwo = (num1,num2) => ({username:"october"})
console.log(addTwo(2, 3))

/*
const myArray = [2, 5, 6, 8, 90]
myArray.forEach(function () {} ) 

*/
    

const myArray = [20, 20, 36, 56]
myArray.forEach() 





