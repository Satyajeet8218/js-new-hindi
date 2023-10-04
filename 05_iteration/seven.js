                               //Reduce Method

 const myNums = [1, 2, 3, 4]
  
const myTotal= myNums.reduce(function(acc, currval){
    
  //  console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval
} ,3)

//console.log(myTotal);


 //Reduce mathod with arrow function

const myTotals = myNums.reduce((acc,currval) =>  acc + currval, 0)
console.log(myTotals);


        //Shopping Cart with Reduce

const shoppingCart = [
    {
        itemName:"js course",
        price:1080

    },
    {
        itemName:"Paid course",
        price:9000

    },
    {
        itemName:"Free course",
        price:1000

    },
    {
        itemName:"Paython",
        price:2500

    },

]

const priceTopay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(priceTopay);