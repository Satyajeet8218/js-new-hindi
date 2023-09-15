// There are two type of declare objects litteral or constructor.
//if we will make constrcutor way it will give sigleton means single. 
//Object.create
//objects literals


const mySym = Symbol("key1")

const jsUser = {
    name: "satyajeet",
    "full name": "satyajeet singh gusain",
    [mySym]: "mykey1",
    age: 23,
    location: "kotdwara",
    email: "satya@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["monday", "sunday", "wednesday",]
}

  // console.log(jsUser.email)
   //console.log(jsUser["email"])
   //console.log(jsUser["full name"])
   //console.log(jsUser.mySym);
   //console.log(jsUser[mySym]);



   jsUser.email = "sonu@gmail.com"
   
   //Object.freeze(jsUser)

   jsUser.email = "user@gmail.com"

   //console.log(jsUser);


   jsUser.greeting = function(){


    console.log("Hello js user");
   }
   console.log(jsUser.greeting);


   jsUser.greeting2 = function(){

    console.log(`Hello js user, ${this.name}`);
   }

   console.log(jsUser.greeting2());