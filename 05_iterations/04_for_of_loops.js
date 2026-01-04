/*
//Arr
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
*/


/*
const greetings = "hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}
*/


/*
//maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(`${key} :- ${value}`)
}
*/


//objects
const myObject={
    'game1':"NFS",
    'game2':"spiderman"
}

for(const [key,value] of myObject){
    console.log(key,':-',value);
}
//this will give errors cause we cannot iterate obj 
//by this method we will se how to do the same furter
