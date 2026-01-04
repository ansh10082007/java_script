const myNumbers = [1,2,3,4,5,6,7,8,9,10]

/*
const newNums=myNumbers.map( (num) => {
    return num+10
})
*/
const newNums = myNumbers
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num>=40)


console.log(newNums)


//If you want to remove some elements → use filter
// If you want to change each element → use map