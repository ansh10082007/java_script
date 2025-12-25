const mathOperations={
    add:function (number1,number2){
        if(!number1 || !number2){
            console.log("Please enter valid numbers")
            return
        }
        return number1+number2;
    },
    subtract:function(number1,number2){
        if(!number1 || !number2){
            console.log("please enter valid input");
            return
        }
        return number1-number2;
    },
    multiplication:function(number1,number2){
        if(!number1 || !number2){
            console.log("please enter valid input");
            return
        }
        return number1*number2;
    },
    division:function(number1,number2){
        if(!number1 || !number2){
            console.log("please enter valid input");
            return
        }
        return number1/number2;
    }
}

// const {add}=mathOperations
// const {subtract}=mathOperations
// const {multiplication}=mathOperations
// const {division}=mathOperations

const {add,subtract,multiplication,division}=mathOperations//object decontruction

result=add(5,6)
console.log(result);

result=subtract(4,6)
console.log(result);

result=multiplication(8,6)
console.log(result);

result=division(8,3)
console.log(result);
console.log(Math.round(result));
console.log(result.toFixed(2));
