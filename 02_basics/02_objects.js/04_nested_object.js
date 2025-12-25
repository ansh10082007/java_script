// ******** NESTED OBJECT ********

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ansh",
            lastname: "Bomble",
        }
    }
}

console.log(regularUser.fullname)                     // prints fullname object
console.log(regularUser.fullname.userfullname)        // prints userfullname object
console.log(regularUser.fullname.userfullname.firstname) // prints firstname
