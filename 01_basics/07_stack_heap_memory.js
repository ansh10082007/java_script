//In primitive datatypes copy is passed 

let myname="Ansh"
let theboy=myname   //the copy of myname var will be passed 

theboy="piyush"   //anychange to theboy will not change myname variable
console.log(myname,theboy)

//in non-primitve reference/address is passed 

let userone={
    email:"anshbomble@gmail.com",
    age:18
}

let usertwo=userone  //this will pass the copy of reference of userone obj to the usertwo obj

usertwo.email="ansh67@gmail.com" //this will change the value of userone.email also 

console.log(userone.email,userone.age)
console.log(usertwo.email,usertwo.age)

