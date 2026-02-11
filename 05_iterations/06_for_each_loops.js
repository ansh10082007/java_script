/*
const coding = ["js","ruby","c","cpp"]

//normal method
coding.forEach( function myfunction(item){
   console.log(item);
} )

//using arrow fucntion(most used by developers)
coding.forEach( (item)=>{
    console.log(item)
})

//we made a function and then called it in forEach
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)
*/


/*
//forEach has three parameters=>string,index,array

const coding = ["js","ruby","c","cpp"]

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})

//we can use forEach for nodelist but not for HTML collection!!


//if u have to skip the parameters u can write anything at the place of that parameters but different 
//But u cannot write forEach((,,arr))=>{}

coding.forEach((_,__,arr)=>{
    console.log(arr)    
})
*/


/*
const myCoding = [
    {
        languageName: "javascript",
        languageFilename:"js"
    },
    {
        languageName: "java",
        languageFilename:"java"
    },
    {
        languageName: "python",
        languageFilename:"py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFilename);
})
*/
