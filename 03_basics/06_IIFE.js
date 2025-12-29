//IIFE=immediately invoked function expression

(function chai(){
    //namee IIFE
    console.log(`DB connected`);
})();//this semicolon is imp to end the IIFE 

( () => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ansh');

