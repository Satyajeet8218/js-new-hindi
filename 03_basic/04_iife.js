//Immediately Invoked Function Expression (IIFE)// 


/*
function sonu(){     // 

console.log(`DB CONNECTED`)

}
sonu()

*/

//NAMED IIFE

(function sonu (){   // It is helpful for makeing a solution from global scope pollution Like(variables,elements) of global scope.
 
   console.log(`satyajeet singh gusain`);

})();


//IIFE with a Arrow function


//SIMPLE IIFE

(  () => {

  console.log(`sATYAjeeeT SinGH guSain`);
  
})();



( (name) => {

    console.log(`jeetu${name}`);
}) ('singh gusain')