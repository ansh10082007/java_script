//singleton

//object literals
const mySym=Symbol("key1")

const user1={
    name:"Hitesh",//name is a key and its value is hitesh here,
    "full name":"Ansh bomble",//to have a space between the key 
    age:18,
    [mySym]:"mykey1",//if we hav to make the key datatype to symbol
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoogedin:false,
    lastloginfDays:["Monday","Saturday"]
}

console.log(user1.email)
console.log(user1["email"])
console.log(user1["full name"])//we cannot call the key having space by the dot method
console.log(user1[mySym])

user1.email="hitesh@chatgpt.com"
//Object.freeze(user1)-------->this locks the object so any chanhges made further will not be done
user1.email="hitesh@637.com"
console.log(user1)

user1.greeting=function(){
    console.log("Hello Js user!");
}
user1.greetingtwo=function(){
    console.log(`Hello Js user!,${this.name}`);
}

console.log(user1.greeting())
console.log(user1.greetingtwo())