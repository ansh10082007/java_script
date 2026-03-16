// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task 
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Aysnc task 2 resolve");  
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"chai",email:"chaiexample@gmail.com"})
//     },1000)
// })
// promiseThree.then(function(user){ 
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false   //type here true also so u can see error also !!
//         if(!error){
//             resolve({username:"ansh",password:"12345"})
//         }else{
//             reject('ERROR something went wrong')
//         }
//     },1000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((myusername)=>{
//     console.log(myusername);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is resolved or rejected");
// })


// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true ;
//         if(!error){
//             resolve({username:"Javascript",password:"123"})
//         }
//         else{
//             reject("Error");
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try{    
//         const response = await promisefive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive()

async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/ansh10082007')
    
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E.",error);
    }
}
getAllUsers();

fetch('https://api.github.com/users/ansh10082007')
.then((response)=>{
    return response.json
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log(error)})

