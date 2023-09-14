// dates


//let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log (myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());


//console.log(typeof myDate);   Date is object in javascript.

//let myCreatedDate = new Date(2023,0,23)
//let myCreatedDate = new Date(2023,0,23,5,3)

//let myCreatedDate = new Date("02-11-1999")
//console.log(myCreatedDate);
//console.log(myCreatedDate.toLocaleDateString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());

//console.log(Date.now()/1000);
//console.log(math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);



 //Important method of date

 newDate.toLocaleString({'default'
      weekday: "long"
      year: "numeric"   
})