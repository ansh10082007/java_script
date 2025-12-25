//array

const arr1=[0,1,2,3,4,5]
const myHeroes=["Shaktiman","Spiderman"]
const arr2=new Array(1,2,3,4,5,"Ansh")
console.log(arr1[0]);
console.log(myHeroes);
console.log(arr2);
console.log('\n');

//Array methods:-

//push() & pop()
arr1.push(6)//adds the element at the end of the array
console.log(arr1);
arr2.pop()//removes the last element of the array
console.log(arr2,'\n')

//unshift() & shift()
arr1.unshift(67)//adds a element at start position in the array
console.log(arr1)
arr2.shift()//removes 1st elemnt of the array
console.log(arr2,'\n')

//includes() & indexOf()
console.log(arr1.includes(67))//will give true or false
console.log(arr1.indexOf(67))//will give 0 if arr contains that digit
console.log(arr1.indexOf(60),'\n')//will give -1 cause arr1 does not have 60

//join()
const string_arr=arr2.join()//makes the array string 
console.log(arr2,'->',typeof arr2);
console.log(string_arr,'->',typeof string_arr);

//slice() & splice()
console.log("A ", arr1);

const myn1 = arr1.slice(1, 3)
console.log(myn1);
console.log("B ", arr1);

const myn2 = arr1.splice(1, 3)
console.log(myn2);
console.log("C ", arr1);

