//IIFE=immediately invoked function expression

(function chai(){
    //namee IIFE
    console.log(`DB connected`);
})();//this semicolon is imp to end the IIFE 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ansh');
