const form =  document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value) 
    const result = document.querySelector("#results")

    if(height == "" || height <= 0 || isNaN(height)){
        result.textContent = "Please enter valid height";
    }
    else if(weight == "" || weight <= 0 || isNaN(weight)){
        result.textContent = "Please enter valid weight";
    }
    else{
        let msg;
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            msg = `You are Under weight`
        }
        else if(bmi>18.6 && bmi<24.9){
            msg = `BMI is in normal range,No need to worry!`
        }
        else if(bmi>24.9){
            msg = `You are Over weight`
        }

        result.innerHTML = `<span>BMI = ${bmi}</span> <br> ${msg}`
    }

    
})