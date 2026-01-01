// for

for(let i=0; i<10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number")
    }
    console.log(element);
}

for(let i=0; i<=10; i++){
    console.log(`outer loop ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`inner loop: ${j} and outer loop: ${i}`)
        console.log(`i x j =${i*j}`);
    }
}


let myArray = ["flash","batman","superman"]
console.log(myArray.length)
for(let index=0;index<myArray.length;index++){
    const element = myArray[index];
    console.log(element)
}

