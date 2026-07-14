let state={
    ename:"Rahul",
    details:{
        email:"rahul@gmail.com",
        loc:"Bangalore"
    },
    product:{
        p_id:101,
        pnmae:"Mp"
    }

}


//How to read object properties like a variable?
/*
    using Object Destructuring
*/
let {product}=state;
let {p_id} = product;
console.log(p_id)
console.log(state.product.p_id)