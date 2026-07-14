let emp={
    eid:101,
    ename:'Rahul',
    esal:45000,
    email:"rahul@gmail.com"
}
let details={
    email:"rahul@tcs.com",
    loc:"Bangalore"
}
//how to merge object? - using spead
let emp_Details={...emp,...details}
console.log(emp_Details)