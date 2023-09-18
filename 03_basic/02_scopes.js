                            //scopes

 /* 

 let A = 10
 const B = 50
 var C = 99
                              //{}curlly braccet is all called scope in functions 

 console.log(A);
 console.log(B);
 console.log(C);

 */

 //var c = 300  
 
 let  a = 300       // whatever we written outside the block is called as global scope. global value are always avilable for block scope (inside the scope).

 if (true) {

     let a = 10    // inside the blockwhatever w written is called as block scope. Vlues are alwys avilable inside the block it can't go outside. 
     const b = 20
     var c = 30
     console.log("INNER;", a );
 }

console.log(a);  
//console.log(b);
 //console.log(c);


 function one(){

    const username ="satyajeet singh gusain"


    function two(){
                                       // we can say closer scope.

        const website = "youtube"  // whenever Nasted functions  child variables can access the parents variable. 
        console.log(username);
    } 

   // console.log(website);

    two()
    
 }

one()

//we can also use nasted type  iside the if, else. 

if(true) {

    const username ="satyajeet"
    if(username === "satyajeet"){

       const website =" youtube"
       
       //console.log(username + website);

    }

    //console.log(website);
    
}

//console.log(username);


// ..................................Intresting............................................//


console.log(addone(5))   // giving console.log.
function addone(value){
    
    return value + 1
    
}



addTwo(5)
const addTwo = function(value){     //addTwo it is variable but we can say expresion some time.
    
    return value + 2
}
