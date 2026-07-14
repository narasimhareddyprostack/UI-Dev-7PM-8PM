let numbers=[10,10,20,10,30,20,10]

let set_Numbers=new Set(numbers)
console.log(set_Numbers)  //Set(3) { 10, 20, 30 }


numbers = [...set_Numbers]

console.log(numbers)