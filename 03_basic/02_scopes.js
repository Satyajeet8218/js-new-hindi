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
