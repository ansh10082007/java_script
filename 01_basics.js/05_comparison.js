//normal comparison btw same datatypes
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//comparison of numbers but of diff datatypes
console.log("2" > 1);
console.log("02" > 1);
//what happen here is that the string gets converted into int

//never do these type of comparisions:
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ===  /*this is strict comparision which checks vale and datatypes also
console.log("2" === 2);//false

