/*************************************************
 * JAVASCRIPT ARRAY – SUMMARY NOTES (CHAPTER 1 & 2)
 *************************************************/

/* ===============================
   Array Creation
   =============================== */

// Array literal
// Syntax: const arr = [value1, value2, ...]

// Array constructor
// Syntax: const arr = new Array(value1, value2, ...)

/* ===============================
   Accessing Elements
   =============================== */

// Syntax: array[index]

/* ===============================
   Add / Remove Elements
   =============================== */

// push()  -> adds element at end
// Syntax: array.push(element)

// pop()   -> removes last element
// Syntax: array.pop()

// unshift() -> adds element at beginning
// Syntax: array.unshift(element)

// shift() -> removes first element
// Syntax: array.shift()

/* ===============================
   Searching Methods
   =============================== */

// includes() -> checks if element exists (true / false)
// Syntax: array.includes(value)

// indexOf() -> returns index or -1
// Syntax: array.indexOf(value)

/* ===============================
   Conversion Method
   =============================== */

// join() -> converts array to string
// Syntax: array.join(separator)

/* ===============================
   Extract / Modify Methods
   =============================== */

// slice() -> extracts part of array (does NOT modify original)
// Syntax: array.slice(startIndex, endIndex)

// splice() -> removes / modifies elements (MODIFIES original)
// Syntax: array.splice(startIndex, deleteCount)

/* ===============================
   Combining Arrays
   =============================== */

// push() with array -> creates nested array
// Syntax: array1.push(array2)

// concat() -> merges arrays, returns new array
// Syntax: array1.concat(array2)

// spread operator (...) -> merges arrays
// Syntax: [...array1, ...array2]

/* ===============================
   Flattening Arrays
   =============================== */

// flat() -> flattens nested arrays
// Syntax: array.flat(depth)

/* ===============================
   Array Checking & Creation
   =============================== */

// isArray() -> checks if value is array
// Syntax: Array.isArray(value)

// from() -> creates array from iterable
// Syntax: Array.from(iterable)

// of() -> creates array from values
// Syntax: Array.of(value1, value2, ...)

/*************************************************
 * END OF ARRAY CHAPTER 1 & 2 SUMMARY
 *************************************************/
