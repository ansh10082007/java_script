
let a = 300
if (true) {
    let a = 10
    // const b = 20  
    var c=30
    console.log("INNER: ", a);
    
}
console.log(a);
// console.log(b);    b is const and is defined only in scope so it value will not come out of scope
console.log(c);
//therefore we use let,const and avoid var


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    //this will give error
    two()

}
one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);   // this will give error cause website is declared nly in above scope outside scope it cant be used
}
// console.log(username);  //this will also give error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //this will not give error
//when u declare fucntion like this it will not give error even when u call it before
function addone(num){
    return num + 1
}



// console.log(addTwo(5)) //this will give error 
//but when u declare fucntion like this it will give error when u call it before
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))