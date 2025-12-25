// const tinderUser=new Object()    ...this is a singleton object
const tinderUser={} //this is nonsingletons

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    emial:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ansh",
            lastname:"Bomble",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj5={5:"a",6:"b"}

const obj3={obj1,obj2}//but this will create array inside a array
console.log(obj3);

const obj4=Object.assign({},obj1,obj2,obj5)//  {} => this is not compulsory but a good habit
//const obj4=Object.assign(obj1,obj2,obj5)   => u can write this way also
console.log(obj4);

//but this method is more useed:
const obj6={...obj1,...obj2,...obj5}
console.log(obj6)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hit@gmail.com"
    },
    {
        id: 3,
        email: "hish@gmail.com"
    },
]//jsut an basic illustration how datat comes from datatypes
//this is an array of objects so user[1]=1st obj,user[2]=2nd obj....
users[1].email


console.log(tinderUser);
console.log(Object.keys(tinderUser));//gives keys of the obj
console.log(Object.values(tinderUser));//gives values of the obj
console.log(Object.entries(tinderUser));//see its ouput u will understand
//all of the three above give array as ouput 


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//checks whether the object has its own property named 'isLoggedIn'
