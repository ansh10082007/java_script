myDate=new Date(2025,3,8,5,8)

// Debugging
myDate.toString();

// Frontend display (date only)
myDate.toLocaleDateString("en-IN");
myDate.toLocaleString("en-IN");

// Backend / API / Database
myDate.toISOString();

// JSON responses
myDate.toJSON();
