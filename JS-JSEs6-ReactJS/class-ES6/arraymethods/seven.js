let enames=['rahul','sonia','priayanka','modi','amith']


//exp out:['RAHUL','SONIA','PRIYANKA','MODI','AMITH'] 

let new_Enames=enames.map((ename)=>{
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames)