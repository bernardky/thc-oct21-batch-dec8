// Find Longest Wordcount In A String

// For example, in this string "The Hacker Collective is a community of awesome people",

// the function should return 10. "Collective" has the longest wordcount of 10.

randomStr = "The Hacker Collective is a community of awesome people";

// 1. change str into array

let randomArr = randomStr.split(" ");

//2. sort based on the wordcount/length (largest wc to smallest)
randomArr.sort((a, b) => b.length - a.length);

//3. take the first item in the sorted array, return the item's length

console.log(randomArr[0].length);
