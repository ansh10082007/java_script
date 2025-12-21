const name="hitesh"
const repocount=50

//to concatinate:
console.log(name+repocount+"value") //this is outdated dont use this

console.log(`Hello my name is ${name} and my repocount is ${repocount}`)
//this method is best for concatinating

const gamename=new String('Hitesh-hc')

console.log(gamename[0]);
console.log(typeof gamename)

console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))  //this shows char at index 
console.log(gamename.indexOf('s'))

const newstring=gamename.substring(0,4)       
console.log(newstring)  //last char (here,at index 4) will not be shown

const anotherstring=gamename.slice(-8,4) 
//here we can hgive negative index in slice which will start the slicing from end of string
console.log(anotherstring)

const newString="  Hitesh  "
console.log(newString)
console.log(newString.trim()); //this trims trims spaces & line terminators if user enter it by mistake/intentionally

const url="https://ansh.com/ansh%20bomble"
url.replace('%20','-')
console.log(url)

console.log(url.includes('ansh'))  //this gives true
console.log(url.includes('ram'))    //this gives false 

console.log(url.split('/',2)) //string.split(separator, limit)
console.log(url.split('/',3))
//It is used to divide one string into multiple parts and store those parts inside an array.
