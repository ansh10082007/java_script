//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//number (int ,float are treated same no need to specify float)
const score = 100
const scoreValue = 100.3

//boolean,null,undefined 
const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol=makes the variable unique
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof anotherId);

//bigint=>for bigger number
const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// Array, Objects, Functions

//array
const heros = ["shaktiman", "naagraj", "doga"];

//objects
let myObj = {
    name: "hitesh",
    age: 22,
}

//functions
const myFunction = function(){
    console.log("Hello world");
}


