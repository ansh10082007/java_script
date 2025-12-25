const score = 400
console.log(score)

const balance = new Number(100)//new String() and new Number() are used to create object versions of strings and numbers.
// However, they are rarely used and generally discouraged in real programs.
console.log(balance)
console.log(typeof balance)

console.log(balance.toString().length) //toString function gives a new string
//lenght function will measure the length of new string 
console.log(typeof balance)
console.log(balance.toFixed(2))

const otherNumber=123.484267
console.log(otherNumber.toPrecision(5))
//this will give u a number of 5 digits(it will include every digit before & after decimal)

const hundreds=100000000
console.log(hundreds.toLocaleString())//this will give u in U.s standards
console.log(hundreds.toLocaleString('en-IN'))//this will give u value in IN standards

//+++++++++++++ MATHS +++++++++++++

console.log(Math)
console.log(Math.abs(-5))//this change the input value into absolut value
console.log(Math.round(4.689))//round-up the int value
console.log(Math.ceil(4.2))
console.log(Math.floor(4.8))
console.log(Math.min(4.9,3,4,90,1))
console.log(Math.max(4.9,3,4,90.8,1))


console.log(Math.random())//Math.random always gives value btw 0 to 1(0 included but not 1)
console.log((Math.random()*10)+1)
//so we multiply by 10 to make it one digit and +1 to ensure is not the outcome
console.log(Math.floor(Math.random()*10)+1)//this will give floor value of the random number

//but what if we want random value in btw min and max??
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))




