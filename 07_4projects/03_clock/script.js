// setInterval(function, time_in_milliseconds)......we will use this concept in the project
//setInterval()  runs a piece of code repeatedly after a fixed time delay.

const result = document.querySelector(".result")

setInterval(()=>{
    const date = new Date();
    result.textContent = date.toLocaleTimeString();

},1000)
