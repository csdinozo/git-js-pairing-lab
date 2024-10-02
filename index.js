//Code your solutions in this file

const fiveToOneHundred = () => {
    for (let i = 5; i <=100; i++) { console.log(i); }
}

fiveToOneHundred();

const multiplesOfThree = () => {
    for ( let i = 3; i <=100; i++)
        if (i % 3 === 0) {console.log(i)}
}
multiplesOfThree();

const multiplesOfThreeOrFive = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) console.log(i);
    }
}
multiplesOfThreeOrFive();

const untilNum = (num) => {
    for (let i = 1; i <= num; i++)
    console.log(i)    
}
untilNum(5);
untilNum(9);
untilNum(42);

const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
}
console.log(multiply(2, 4))     //returns 8
console.log(multiply(10, -5))   //returns -50
console.log(multiply(3, 7.5))   //returns 22.5