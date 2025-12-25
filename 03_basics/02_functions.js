function calculateCardPrice(...num1){// this =>... operator is called rest operator and spread(we used in arrays) operator also
    return num1
}
//we used rest operator so that we can add arguments as we want 
console.log(calculateCardPrice(200,400,500))

const user={
    username:"Hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username:"sam",
    price:399,
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
