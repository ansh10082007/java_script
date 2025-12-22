let value=33
console.log(value,typeof value)
let convert1=String(value)  //this will convert value which is int to string
console.log(convert1,typeof convert1)


let value1="67"
console.log('\n',value1,typeof value1)
let convert2=Number(value1) //this will convert the string to int datatype
console.log(convert2,typeof convert2)


let value2="67abc"
console.log('\n',value2,typeof value2)
let convert3=Number(value2) //this will convert value 2 type but u shld see its output!!
console.log(convert3,typeof convert3) //this will show type as number but the value will be NaN


let value3="ansh"
console.log('\n',value3,typeof value3)
convert4=Number(value3)
console.log(convert4,typeof convert4) //type=>number,value=>Nan

let empty=null
console.log('\n',empty,typeof empty)
convert5=Number(empty)
console.log(convert5,typeof convert5)  //this converted null to zero 

let boolean=true;
console.log('\n',boolean,typeof boolean)
convert6=Number(boolean)        //this will convert true=>1 and false=>0
console.log(convert6,typeof convert6)  

let isLoggedIn=1
console.log('\n',isLoggedIn,typeof isLoggedIn)
let booleanIsLoggedIn=Boolean(isLoggedIn)  //this will convert 1=>true,0=>false
console.log(booleanIsLoggedIn,typeof booleanIsLoggedIn)

let someNumber = 33
console.log('\n',someNumber,typeof someNumber);
let stringNumber = String(someNumber)
console.log(stringNumber,typeof stringNumber);