function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
}
sayMyName()



function add(number1,number2){//here number1 and number2 are called parameters
    console.log(number1+number2); 
}
const result=add(2,5);//here,2 and 5 are arguments
console.log("Result: ",result);
//this will not give result as we did not return anything in function 


function add1(number1,number2){
    console.log(number1+number2);
    return number1+number2
    console.log("ansh")//this will not be executed cause after return statement the function stops 
}
const result1=add1(4,5);
console.log("Result: ",result1);

function loginUsername(name){
    return `${name} just logged in`
}
console.log(loginUsername("Ansh"))



