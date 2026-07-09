var numbers=[1,2,3,4,5,6,7,8,9,10]
//get all even numbers into array from numbers

var even_numbers=[]
for(let num of numbers){
    if(num%2 ===0){
       even_numbers.push(num)
    }
}

console.log(even_numbers)