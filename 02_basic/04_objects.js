//sigleton objects
//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="satya"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {

   email: "some@gmail.com",
   fullname: {

    userfullname:{

        firstname: "satyajeet",
        lastname: "gusain",

    }
}

}

//console.log(regularUser.fullname.userfullname.lastname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2 ,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}  // usefull or easy sintex.
//console.log(obj3);


//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//console.log(Object.hasOwnProperty('isLoggedOut'));


              //  D structuring of Objects
   
     const Course = {
            
        coursename: "Java script course",
        price: "free",
        courseInstructor: "Hitesh Chaudhary"
        

     }  
     
     // Course.courseInstructor
 

     //const{courseInstructor} = Course  
     //console.log(courseInstructor);

      const{courseInstructor: Instructor} =Course
      console.log(Instructor);