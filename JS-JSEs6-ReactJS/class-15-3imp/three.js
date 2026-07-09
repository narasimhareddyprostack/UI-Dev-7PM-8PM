let emp={eid:101,ename:'Rahul Gandhi'} // JS object


console.log(JSON.stringify(emp))
//{"eid":101,"ename":"Rahul Gandhi"}


let emp_str='{"eid":101,"ename":"Rahul Gandhi"}';

console.log(typeof emp_str)

console.log(JSON.parse(emp_str))
