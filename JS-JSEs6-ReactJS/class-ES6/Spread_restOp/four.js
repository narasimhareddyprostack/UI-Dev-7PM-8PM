/*
    1.create new array/object
    2.merge arrays/objects
    3.extending array elements/object properties
*/
let enames=["RG","SG","PG"]
let unames=["NM","Amith","Rajni"]

let new_Names=[...enames,...unames]
console.log(new_Names)

//extending array elements using spread operator
let add_names=[...enames,"Narasimha","Gauhtma"]

console.log(add_names)