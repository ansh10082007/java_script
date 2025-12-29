const user ={
    username:"Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);
/*Q.why we cant directly write ${username} on line 6:
Inside that method, username is not a normal variable, it is a property of the object.
So you must access it using the object reference — 
and in methods we use this.username to refer to the property of the same object.
*/

// this = reference to the object where THIS is used
//           (the object depends on the immediate context)

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
person1.eat();
person2.eat();


function chai(){
    let username="ansh";
    console.log(this.username);//return undefined cause this in a function does not point to local variable
    console.log(this);
}
chai()

const chai1=function(){
    let usernmae="ansh"
    console.log(this.username);
}