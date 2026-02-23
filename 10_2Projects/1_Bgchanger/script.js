//generate a random backgroundColor

const randomColor = function(){
    const letters = "0123456789ABCDEF"
    let color = "#";

    for(let i=1;i<=6;i++){
        color = color + letters[Math.floor(Math.random()*16)]
    };

    return color;
}

const body = document.querySelector("body");
const start = document.getElementById("start")
const stopIt = document.getElementById("stop")

let intervalId = null;

const changebg = function(){
    body.style.backgroundColor = randomColor()
}

start.addEventListener('click',function(){
    if(intervalId != null){
        return;
    }
    else{
        intervalId = setInterval(changebg,1000);
    }
})

stopIt.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
})
