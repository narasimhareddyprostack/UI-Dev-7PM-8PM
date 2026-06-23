/*
    Equality                         vs Strict Equality OP
     ==                                 ===

     verify only content            data type & content
*/
let a=100;   //number
let b=200;   //number
let c='100';//str
console.log(a==b)   //false 
console.log(a==c)  // true 

console.log(a===b) //false
console.log(a===c)  //false