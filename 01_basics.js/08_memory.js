/*
========================================================
JAVASCRIPT: PASS BY VALUE, OBJECT REFERENCES, MUTATION
========================================================

IMPORTANT RULE (MEMORIZE THIS):
--------------------------------
JavaScript is ALWAYS pass-by-value.
There is NO pass-by-reference in JavaScript.

What changes is WHAT the value is.
--------------------------------------------------------

1) PRIMITIVE VALUES (number, string, boolean)
---------------------------------------------

Primitive values store the actual data directly.

Example:
*/

let a = 10;
let b = a;   // copy of value is passed

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
Explanation:
- a stores value 10
- b gets a copy of 10
- Changing b does not affect a

This is simple pass-by-value.
--------------------------------------------------------
*/


/*
2) OBJECTS (arrays, objects, functions, new Number())
------------------------------------------------------

Objects are stored in memory.
Variables store a REFERENCE (address) to the object.

IMPORTANT:
- The reference itself is passed by value
- NOT the object
*/

let obj = { x: 1 };
let ref = obj;  // copy of reference is passed

/*
Memory picture:
obj  ----->  { x: 1 }
ref  ----->  { x: 1 }
*/


/*
3) MUTATION (changing inside the object)
----------------------------------------
*/

ref.x = 5;

console.log(obj.x); // 5
console.log(ref.x); // 5

/*
Explanation:
- Both obj and ref point to the SAME object
- We modified the object itself
- All references see the change

Mutation affects all variables pointing to the object.
--------------------------------------------------------
*/


/*
4) REASSIGNMENT (THIS CONFUSES MOST STUDENTS)
---------------------------------------------
*/

ref = { x: 10 };

/*
New memory picture:
obj  ----->  { x: 1 }
ref  ----->  { x: 10 }
*/

console.log(obj.x); // 1
console.log(ref.x); // 10

/*
Explanation:
- ref is reassigned to a NEW object
- obj still points to the old object
- Only ref changes    
- obj is NOT affected

Reassignment affects ONLY one variable.
--------------------------------------------------------
*/


/*
5) APPLY THIS TO new Number()
-----------------------------
*/

let balance = new Number(100);
let copy = balance;

/*
balance -----> Number(100)
copy    -----> Number(100)
*/

copy = new Number(200);

/*
balance -----> Number(100)
copy    -----> Number(200)
*/

console.log(balance); // Number {100}
console.log(copy);    // Number {200}

/*
Explanation:
- balance and copy initially shared the same object
- Reassigning copy created a new object
- balance remained unchanged
--------------------------------------------------------
*/

/*
========================================================
FINAL ONE-LINE SUMMARY (VERY IMPORTANT):
--------------------------------------------------------
JavaScript passes a COPY OF THE REFERENCE for objects,
mutation changes the object,
reassignment changes only the variable.
========================================================
*/
