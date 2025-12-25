const marvel_heros=["thor","Ironman"]
const marvel_heros_copy=["thor","Ironman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)
//this will add the dc_heros as a 2nd(the array indexing starts from 0) element in the marvel_heros array
//but it will add it as an array in array
console.log(marvel_heros[2][1])//to access the 2nd elemeent's 1st element

//Other method
const all_heros=marvel_heros_copy.concat(dc_heros)
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(all_heros);

const allheros=[...marvel_heros_copy,...dc_heros]
//this is called spread technique
//this break the array elements into individual elements and give a new array
console.log(allheros)

another_arr=[1,2,3,[4,67,6,[4,5,98,[90,89]]]]
const usable_array=another_arr.flat(1)
// const usable_array=another_arr.flat(2)
// const usable_array=another_arr.flat(infinity) 
console.log(usable_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))//intersting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
