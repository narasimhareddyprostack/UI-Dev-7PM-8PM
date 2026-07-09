let employee ={
    name: "John",
    age: 30,
    position: "Software Engineer",
    avail:true
}
let emp={}  //empty object
let eids = [101,102,103]
//How to verify - give object is empty or not

console.log(Object.keys(employee))
console.log(Object.keys(employee).length)
console.log(Object.keys(employee).length>0)  //true

if (Object.keys(emp).length>0) {
    console.log("Not empty object")
} else {
    console.log("Empty object")
}