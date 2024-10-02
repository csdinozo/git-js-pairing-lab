//Code your solutions in this file

// 1. Write a function fiveToOneHundred that console logs all numbers from 5 to 100.
const fiveToOneHundred = () => {
    for (let i = 5; i <=100; i++) { console.log(i); }
}

fiveToOneHundred();

// 2. Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3.
const multiplesOfThree = () => {
    for ( let i = 3; i <=100; i++)
        if (i % 3 === 0) {console.log(i)}
}
multiplesOfThree();

// 3. Write a function multiplesOfThreeOrFive that console logs all positive numbers to 100 if that number is either a mulitple of 3 or a mutliple of 5.
const multiplesOfThreeOrFive = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) console.log(i);
    }
}
multiplesOfThreeOrFive();

// 4. Write a function untilNum that takes in an integer parameter and console logs all numbers from 1 to that number.
const untilNum = (num) => {
    for (let i = 1; i <= num; i++)
    console.log(i)    
}
untilNum(5);
untilNum(9);
untilNum(42);

// 5. Write a function multiply that takes in two number parameters and returns their product.
const multiply = (numOne, numTwo) => {
    return numOne * numTwo;
}
console.log(multiply(2, 4))     //returns 8
console.log(multiply(10, -5))   //returns -50
console.log(multiply(3, 7.5))   //returns 22.5

// 6. Write a function add that takes in two number parameters and returns their sum. But if the two values are the same, return triple their sum!
const add = (numOne, numTwo) => {
    if (numOne === numTwo)
        return (numOne + numTwo)*3
    return numOne + numTwo;
}
console.log(add(2, 4))     //returns 6
console.log(add(10, -5))   //returns 5
console.log(add(3, 7.5))   //returns 10.5
console.log(add(5, 5))     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
console.log(add(6, 6))     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that

// 7. Write a function isNegative that takes in a number parameter and returns true is the number is a negative value and false is the number is a positive value.
const isNegative = (num) => {
    return num < 0;
}
console.log(isNegative(3))         //returns false
console.log(isNegative(-2))        //returns true
console.log(isNegative(Math.PI))   //returns false

// 8. Write a function triangleArea that takes in the height and base of a triangle and returns the area of the triangle.

const triangleArea = (height,base) => {
    return (0.5 * (height)*(base) )
}
console.log(triangleArea(5, 7))    //returns 17.5
console.log(triangleArea(6, 8))    //returns 24

// 9. Write a function betweenTwentyAndFourty that takes in a number parameter and checks whether a given integer is within 20 to 40. It returns true if it is and false if not.
const betweenTwentyAndFourty = (num) => {
    return num > 20 && num < 40;
}
console.log(betweenTwentyAndFourty(20))     //return false
console.log(betweenTwentyAndFourty(21))     //return true
console.log(betweenTwentyAndFourty(39))     //return true
console.log(betweenTwentyAndFourty(40))     //return false