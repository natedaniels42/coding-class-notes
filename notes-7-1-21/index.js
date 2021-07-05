// Sort the animals alphabetically by first letter, 
//but if two animals start with the same letter they should appear in the original order
// const animals = ['elephant', 'dog', 'antelope', 'deer', 'crocodile', 'aardvark', 'eagle', 'cat']
// should return ['antelope', 'aardvark', 'crocodile', 'cat', 'dog', 'deer', 'elephant', 'eagle']

// const sorted = (arr) => {
//     return arr.sort((a,b) => {
//         if (a[0] < b[0]) {
//             return -1;
//         } else if (a[0] > b[0]) {
//             return 1;
//         }
//     })
// }

// console.log(sorted(animals));




// Sort the words in descending order by length
// const words = ['long', 'longer', 'longest', 'longlierest', 'short', 'shor', 'sho', 'sh'];
// Should return ['longlierest', 'longest', 'longer', 'short', 'shor', 'long', 'sho', 'sh']

// const wordLengths = (arr) => {
//     return arr.sort((a,b) => {
//         if (a.length < b.length) {
//             return 1;
//         } else {
//             return -1;
//         } else {
//     })
// }

// console.log(wordLengths(words));



// Sort an array with both strings and numbers so that the strings come first and the numbers come after. 
// The strings should be sorted in reverse order and the numbers should be in ascending order
// const mixed = ['pie', 5, 'cake', 2, 'pudding', 12, 'meringue', 22, 'mousse', 6, 'ice cream', 44];
// Should return ['pudding', 'pie', 'mousse', 'meringue', 'ice cream', 'cake', 2, 5, 6, 12, 22, 44]


// const sortMixed = (arr) => {
//     return arr.sort((a,b) => {
//         if (typeof a === 'string' && typeof b === 'number') {
//             return -1;
//         } else if (typeof a === 'string' && typeof b === 'string') {
//             if (a < b) {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         } else {
//             return a - b;
//         }
//     });
// }

// console.log(sortMixed(mixed));


// Fill
// Fills all spots in an array of predetermined length with a specified value

// You are given a positive integer n.  
// Create an array that is n length where each item is an array with just the index of that particular array in it
// if n === 6 result would be [[0], [1], [2], [3], [4], [5]]

// const fillArray = (n) => {
//     const arr = [];

//     for (let i = 0; i < n; i++) {
//         arr.push([i]);
//     }

//     return arr;
// }

// const fillArray = (n) => {
//     return new Array(n).fill(null).map((x, i) => [i])
// }

// console.log(fillArray(6));

// Map
// Takes an array and returns a new array by performing an operation on each item

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// Given an array return a new array where every item is doubled
// const arr1 = [1,2,3]; // should return [2,4,6];
// const arr2 = ['this', 'is', 'a', 'test']; // should return ['thisthis', 'isis', 'aa', 'testtest']

// const double = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + arr[i];
//     }

//     return arr;
// }

// const double = (arr) => {
//     return arr.map(item => item + item);
// }

// console.log(double(arr1));
// console.log(double(arr2));


// Reduce
// Takes an array and performs a function on each item to reduce it down to a single value
// A stands accumulater (the amount of the accumulated values so far) and C stands for currentValue (the current index that you are dealing with)

// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// Find the sum of the items of two arrays
//const arr1 = [1,2,3];
//const arr2 = [4,5,6];
// arr1 + arr2 should equal 21
// const arr3 = [100,200,300];
// const arr4 = [400,500,600];
// arr3 + arr4 should equal 2100

// const arrayPlusArray = (arr1, arr2) => {
//     let sum = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         sum += arr1[i];
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         sum += arr2[i];
//     }

//     return sum;
// }

// const arrayPlusArray = (arr1, arr2) => {
//     return arr1.reduce((a,c) => a + c) + arr2.reduce((a,c) => a + c);
// }

// console.log(arrayPlusArray(arr1, arr2))
// console.log(arrayPlusArray(arr3, arr4))

// https://www.codewars.com/kata/57eaeb9578748ff92a000009
// Find the sum of an array of integers where some are numbers and some are strings
// const arr1 = [9, 3, '7', '3'] // Should return 22
// const arr2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7] // Should return 42

// const sumMix = (arr) => {
//     let sum = 0; 

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             arr[i] = Number(arr[i]);
//         }
//         sum += arr[i];
//     }

//     return sum;
// }

// const sumMix = (arr) => {
//     return arr.reduce((a,c) => +a + +c)
// }

// console.log(sumMix(arr1));
// console.log(sumMix(arr2));


// Concat
// Attaches another array at the end of the current array

// https://www.codewars.com/kata/5899642f6e1b25935d000161
// You are given two sorted arrays and you must combine them together into one sorted array with no repeated values.
// arr1 = [1, 3, 5, 7, 9, 11, 12];
// arr2 = [1, 2, 3, 4, 5, 10, 12];
// Returns [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
                
// const mergeArrays = (arr1, arr2) => {
//     const newArr = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (!newArr.includes(arr1[i])) {
//             newArr.push(arr1[i]);
//         }
//         if (!newArr.includes(arr2[i])) {
//             newArr.push(arr2[i]);
//         }
//     }

//     return newArr.sort((a,b) => a - b);
// }

// const mergeArrays = (arr1, arr2) => {
//     return [...new Set(arr1.concat(arr2))].sort((a,b) => a - b);
// }

// console.log(mergeArrays(arr1, arr2))


//Spread Operator
//const str = 'This is a string';
//console.log(...str);

//spread operator can be used for an unknown number of arguments
// const sum = (x,y,z) => {
//     return x + y + z;
// }
// console.log(sum(...[1,2,3,4]));



// Insert arrays into middle of a new array
// const numbers = [1,2,3,7,8,9];
// const arr3 = [4,5,6];
// const arr4 = [10,11,12];
// const newNumbers = [...numbers.slice(0,3),...arr3,...numbers.slice(3),...arr4];
// console.log(newNumbers);


// const obj1 = {
//     one: 1,
//     two: 2,
//     three: 3
// }

// const obj2 = {
//     three: 'three', 
//     four: 4,
//     five: 5
// };

//Combine 2 objects together
// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);


// Determine if a given email address is valid
// Email must follow normal email format (XXXXXX@XXXX.XXX)
// It must end with either .com, .edu, or .nz
// Email can contain numbers but can't begin with a number

// const email1 = john.doe@email.com // returns true
// const email2 = john.doe@email // returns false
// const email3 = john.doe@email.edu // returns true 
// const email4 = john.doe@email.nz // returns true
// const email5 = 12john@email.com // returns false
