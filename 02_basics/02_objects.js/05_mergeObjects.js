// ******** MERGING OBJECTS ********

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "a", 6: "b"}

// ❌ This creates object inside object, not merging
const obj3 = { obj1, obj2 }
console.log(obj3)

// ✔ Recommended method using Object.assign()
const obj4 = Object.assign({}, obj1, obj2, obj5)
console.log(obj4)

// ✔ Most commonly used method (Spread Operator)
const obj6 = { ...obj1, ...obj2, ...obj5 }
console.log(obj6)
