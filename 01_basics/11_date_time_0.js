// Create a Date object (current date & time)
let myDate = new Date();

/*
---------------------------------------------------
1) console.log(myDate)
---------------------------------------------------
• Prints the Date object itself
• Output depends on environment (browser / Node.js)
• Mostly for quick debugging
• NOT reliable for formatting
*/
console.log(myDate);


/*
---------------------------------------------------
2) toString()
---------------------------------------------------
• Converts date to a readable string
• Uses LOCAL time zone
• Shows day, date, time, timezone
• Good for debugging, logs
• NOT recommended for backend storage
*/
console.log(myDate.toString());
// Example: Sun Dec 21 2025 18:30:15 GMT+0530 (India Standard Time)


/*
---------------------------------------------------
3) toDateString()
---------------------------------------------------
• Shows ONLY the date part
• No time, no timezone
• Human-friendly format
• Good for UI display when time is not needed
*/
console.log(myDate.toDateString());
// Example: Sun Dec 21 2025


/*
---------------------------------------------------
4) toISOString()
---------------------------------------------------
• Converts date to ISO 8601 format
• ALWAYS in UTC time
• Standard format for APIs & databases
• BEST choice for backend & data storage
*/
console.log(myDate.toISOString());
// Example: 2025-12-21T13:00:15.000Z


/*
---------------------------------------------------
5) toJSON()
---------------------------------------------------
• Same output as toISOString()
• Automatically used when sending date in JSON
• Used internally by JSON.stringify()
• Rarely called manually
*/
console.log(myDate.toJSON());
// Example: 2025-12-21T13:00:15.000Z


/*
---------------------------------------------------
6) toLocaleDateString()
---------------------------------------------------
• Formats date according to user locale
• ONLY date (no time)
• Best for frontend display
• Locale can be customized
*/
console.log(myDate.toLocaleDateString("en-IN"));
// Example: 21/12/2025

console.log(myDate.toLocaleDateString("en-US"));
// Example: 12/21/2025

/*
---------------------------------------------------
toLocaleString()
---------------------------------------------------
• Converts date + time into human-readable format
• Uses LOCAL timezone
• Format depends on user's region (locale)
• BEST for frontend display (date + time together)
• NOT for database or backend storage
*/
console.log(myDate.toLocaleString());
// Example (India): 21/12/2025, 6:30:15 pm
