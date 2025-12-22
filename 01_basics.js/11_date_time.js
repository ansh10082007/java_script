//getting a Date
let myDate=new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); //date is object
console.log('\n');

//setting a date
//Date(year,month(0-11),day,hours,minutes,seconds,ms):
let myCreateDate=new Date(2025,11,21)   //moths begin-end from 0-11(jan-dec)
//here the MM starts from 01-12 cause we are storing it as Number Date
console.log(myCreateDate.toDateString())

let date1=new Date(2025,0,23,13,55)
console.log(date1.toLocaleString())

let date2=new Date("2025-01-14")//Format=>YY-MM-DD
//here the MM starts from 01-12 cause we are storing it as String Date
console.log(date1.toLocaleString())

let date3=new Date("01-14-2025")//Format=>MM-DD-YY
console.log(date3.toLocaleString("en-IN"))

let time1=Date.now()
console.log(time1)//returns milliseconds passed from 1st Jan 1970 to now
console.log(date3.getTime());//return ms passed from 1st Jan 1970 to date3(here,14 Jan 2025)
//Date.now() and dateObject.getTime() both return the number of milliseconds that have passed since the "Unix Epoch" (January 1, 1970, 00:00:00 UTC).


console.log(Math.round(Date.now()/1000))
//this will give value in seconds and by rounding it up

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); //cause it will give month from 0-11
console.log(newDate.getDay());//it will give day but in number..0-sunday,1-monday...etc

// newDate.toLocaleString('default',{
//     weekday:"long",
// })
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    dateStyle:"medium"
}))