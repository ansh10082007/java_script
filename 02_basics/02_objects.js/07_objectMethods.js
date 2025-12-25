// ******** IMPORTANT OBJECT METHODS ********

const tinderUser = {
    id: "123abc",
    name: "Sammy",
    isLoggedIn: false
}

console.log(tinderUser)

// Returns all keys in array
console.log(Object.keys(tinderUser))

// Returns all values in array
console.log(Object.values(tinderUser))

// Returns key + value in array form
console.log(Object.entries(tinderUser))

// Checks if property exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
