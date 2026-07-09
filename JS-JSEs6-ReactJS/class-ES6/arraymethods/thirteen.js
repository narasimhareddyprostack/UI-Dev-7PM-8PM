let enames=['rahul','sonia','priyanka','modi','amity','pooja']

//collect all employee names starts with 'p'

let new_Enames=enames.filter((ename)=>{
    return ename.startsWith('p')
})
console.log(new_Enames)