const user1={
    name:"Hitesh",
    age:18,
    location:"Jaipur",
}


user1.greeting=function(){
    return "Hello Js user!"
}
user1.greetingtwo=function(){
    return `Hello Js user!,${this.name}`
}

console.log(user1.greeting())
console.log(user1.greetingtwo())