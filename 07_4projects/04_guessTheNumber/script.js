let pick = (Math.round(Math.random()*100))
let rem = 10;
let arr = [];

let remaining = document.getElementById("remaining")
let previous = document.getElementById("previous")

const form = document.querySelector("form")


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const result = document.querySelector("#result")
    const number = parseInt(document.querySelector("#number").value)

    if(number > 100 || number<0 || isNaN(number)){
        result.textContent = `Please enter valid number`;
    }
    else{
        if(rem != 1){
            if(number == pick){
                result.textContent = "Congratulations You guessed right number!"
            }
            else{
                arr.push(number);
                rem = rem-1;
                remaining.textContent = `Chances Remaining: ${rem}`
                previous.textContent = `Previous Guesses: ${arr.join(",")}`
            }
        }
        else{
            remaining.textContent = `Chances Remaining: 0`
            result.textContent = `The number was ${pick}`
        }
    }
})

reset.addEventListener('click',(e)=> {
    let pick = (Math.round(Math.random()*100));
    rem=10;
    arr = [];
})





