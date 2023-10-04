//const coding = ["satyajeet ", "sonu", "you", "this", "wo", "yaha",]

//coding.forEach((item) => {
//console.log(item);
//})

//Item with a variable it will give us undefined..thats why for each loop not returned any values.

//const values = coding.forEach((item) => {
//    console.log(item);
//})
//console.log(values);




//Basic Filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)                 One mathod

//const newNums = myNums.filter((num) => {               
 //  return  num > 4                                               Second method
//})




//Declare Variables with For Each Loops

const newNums = []

myNums.forEach((num)=>{
    if (num > 4) {
        newNums.push(num)
    }
})
//console.log(newNums);

//Books example for Filter

const books = [

    { title: 'book one', genre: 'Economic', publish:'1900',
     edition: 2009},
    { title: 'book two', genre: 'Maths', publish:'2666',
     edition: 2004},
    { title: 'book three', genre: 'Biology', publish:'2011',
     edition: 2004},
    { title: 'book four', genre: 'biology', publish:'2011',
     edition: 2904},
    { title: 'book five', genre: 'History', publish:'2000',
     edition: 2004},
    { title: 'book six', genre: 'Geography', publish:'2000',
     edition: 2004},
    { title: 'book seven', genre: 'History', publish:'2004',
     edition: 2005},
    { title: 'book eight', genre: 'Accountancy', publish:'2000',
     edition: 2002},
    { title: 'book nine', genre: 'Maths', publish:'2005',
     edition: 1004},
    { title: 'book ten', genre: 'Economic', publish:'2000',
     edition: 2104},

]

  let userBooks = books.filter((Bk) => Bk.genre === 'History')

userBooks = books.filter((Bk)=> {return Bk.publish >= 2000 && Bk.genre === 'History'
})

console.log(userBooks);

