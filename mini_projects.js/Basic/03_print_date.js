let mydate=new Date();

console.log("Current date:",mydate.toLocaleDateString("en-IN"));
console.log("Current year: ",mydate.getFullYear());
console.log("Todays Day: ",mydate.toLocaleString('default',{weekday:"long"}));

//calculate age
let Birthday=new Date("2007-08-10");
let Today=Date.now();

let difference=Today-(Birthday.getTime());

let totalDays=difference/86400000;

const daysPerYear=365.25;
const daysPerMonth=30.44;

const years=Math.floor(totalDays/daysPerYear)
const remainingDaysAfterYears=totalDays%daysPerYear;

const months=Math.floor(remainingDaysAfterYears/daysPerMonth)
const days=Math.floor(remainingDaysAfterYears%daysPerMonth)

console.log(`Your age is:${years}years,${months}months,${days}days`)

