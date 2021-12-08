// deafGrandma("I have a bad feeling about this") should return "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"

randomStr = "I have a bad feeling about this";

//1. change into uppercase and splitting into words
let randomArr = randomStr.toUpperCase().split(" ");

//2. add !! into each word using map
let mappedArr = randomArr.map((item) => item + "!!");

//3. join them back
let joinedArr = mappedArr.join(" ");

console.log(joinedArr);
