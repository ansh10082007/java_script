/*Arrow functions are mainly used to:
1.Write code in a cleaner and shorter way
2.Fix issues with this keyword
3.Make callbacks easier to read*/

/* 
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
*/

const chai2=()=>{
    let username="hitesh"
    console.log(this);
}
chai2()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));

// const addTwo2=(num1,num2)=>num1+num2
const addTwo2=(num1,num2)=>(num1+num2)
console.log(addTwo2(4,6));

const username=(name)=>({city:"mumbai"})
console.log(username("ansh"));

