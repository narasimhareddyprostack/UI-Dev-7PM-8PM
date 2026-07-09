let enames=['rahul','sonia','priyanka','modi','amity','pooja']

//collect all employee names starts with 'p'

let new_Enames=[]

for(let ename of enames){
        if(ename.startsWith('p')){
            new_Enames.push(ename)
        }
}
console.log(new_Enames)