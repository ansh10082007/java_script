const course={
    coursename:"js in hindi",
    prince:199,
    courseInstructor:"Hitesh",
}

console.log(course.courseInstructor)

//object destructuring
const {courseInstructor}=course
console.log(courseInstructor);

const {courseInstructor:instructor}=course
console.log(instructor);

/*this is api struct json...jus a basic intro*/
//sometimes data comes in object form and sometimes in array form
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "prince":"free",
// }

// [
//     {},
//     {},
//     {}
// ]