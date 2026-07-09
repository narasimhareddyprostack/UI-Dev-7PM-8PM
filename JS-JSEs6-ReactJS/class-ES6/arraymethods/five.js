var numbers=[1,2,3,4,5,6,7,8,9,10]
//get all even numbers into array from numbers

var even_numbers=numbers.filter(function(num){return num%2 ===0;})

console.log(even_numbers)

//when to use filter method - for data selection
//when to use map method    - for data tranformation