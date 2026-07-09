let employees=[
    {eid:101,ename:"Rahul",gender:"Male"},
    {eid:102,ename:"Sonia",gender:"Female"},
    {eid:103,ename:"Priyanka",gender:"Female"},
    {eid:104,ename:"Modi",gender:"Male"},
    {eid:1015,ename:"Amith",gender:"Male"}
]
//get all female employes into new array
let female_Employees=[]
for(emp of employees){
    if(emp.gender ==="Female"){
        female_Employees.push(emp)
    }
}

console.log(female_Employees)