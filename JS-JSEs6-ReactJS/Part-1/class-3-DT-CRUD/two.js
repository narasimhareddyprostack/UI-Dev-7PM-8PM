//create - array
let enames=["Rahul","Sonia","Priyanka","Modi"]
//index       0         1       2           3
//read - array
console.log(enames)
//read - array element? using indexing
console.log(enames[0])  //Rahul
console.log(enames[1])  //Sonia
console.log(enames[2])  //Priyanka
console.log(enames[3])  //Modi
console.log(enames[9])  //undefined

//update 
enames[1]="Sonia Gandhi"
console.log(enames)

//delete
delete enames
console.log(enames)
