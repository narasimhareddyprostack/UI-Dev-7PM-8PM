let numbers=[1,2,3,4,5]

//exp out:  [1,4,9,16,25]

let new_Numbers=numbers.map((num)=>{
    return num*num;
})

console.log(numbers)
console.log(new_Numbers)