const coding = ['js', 'ruby', 'java', 'paython', 'cpp']

coding.forEach( function (item) {
   // console.log(item);
}  )

coding.forEach (function (value) {
    
   // console.log(value);
})


//coding.forEach( () => {})   //basic call back function

 coding.forEach( (item) => {

   // console.log(item);
 })


//..................................................................................................................................


function printMe(item){
   // console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr) => {

  //  console.log(item, index, arr);

} )


const myCoding = [ 

{
    languageName: "Javascript",
    languageFileName:"js"
},
{
    languageName: "paython",
    languageFileName:"py"
},

{
    languageName: "cPP",
    languageFileName:"c++"
},

]

myCoding.forEach( (item) => {            // For Each loop
   
  console.log(item.languageFileName);

})