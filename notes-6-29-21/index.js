// Includes/Some
// Includes tells you if a given value is in an array
// Some tells you if any item in an array fulfills the given conditions

// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce
// You are given an array and a value.  Return true if the value is in the array and false if not.
// const arr1 = [80, 117, 115, 104, 45, 85, 112, 115] // Should return true for 45
// const arr2 = ['This', 'is', 'a', 'test'] // Should return false for 'tes'

// const check = (arr, val) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return true;
//         }
//     }

//     return false;
// }

// const check = (arr, val) => {
//     return arr.includes(val);
// }

// const check = (arr, val) => {
//     return arr.some(x === x > val);
// }

// console.log(check(arr1, 45))
// console.log(check(arr2, 'tes'));


// Every
// Tests if every single item in an array passes a certain condition

// https://www.codewars.com/kata/54598d1fcbae2ae05200112c
// You are given an array and a function.  Check if every item in the array fulfills the condition of the function
// const arr = [1,2,3,4,5];
// const belowNine = (num) => num < 9; //Should return true
// const aboveFour = (num) => num > 4; //Should return false

// const all = (arr, fun) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (!fun(arr[i])) {
//             return false;
//         }
//     }
            
//     return true;
// }
            
// const all = (arr, fun) => {
//     return arr.every(fun);
// }
                
// console.log(all(arr, belowNine));
                

// IndexOf 
// Tells you the index of the first occurence of the value
// LastIndexOf
// Tells you the index of the last occurence of the value

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// Find the value 'needle' in the haystack array and return 'found the needle at position {index}'
// const arr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
// Should return 'found the needle at position 5'

// const findNeedle = (arr) => {
//     let index = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'needle') {
//             index = i;
//             break;
//         }
//     }

//     return `found the needle at position ${index}`;
// }

// const findNeedle = (arr) => {
//     return `found the needle at position ${arr.indexOf('needle')}`
// }

// console.log(findNeedle(arr));

// Check that an item occurs exaclty once in an array
// const arr = [1,3,5,7,7,8,6,4,3]; 
// Should return true for 8
// Should return false for 7
// Should return false for 9

// const onlyOnce = (arr, val) => {
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             count++;
//         }
//     }

//     return count === 1;
// } 

// const onlyOnce = (arr, num) => {
//     return arr.indexOf(num) !== -1 && arr.indexOf(num) === arr.lastIndexOf(num);
// }

// console.log(onlyOnce(arr, 8))
// console.log(onlyOnce(arr, 7))
// console.log(onlyOnce(arr, 9));


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
                

// Reverse
// Takes the items of the array and reverse their order in the array

// https://www.codewars.com/kata/51c8991dee245d7ddf00000e
// Take a string and reverse the order of the words
// const str = "The greatest victory is that which requires no battle" // Should return "battle no requires which that is victory greatest The"

// const reverseWords = (str) => {
//     let current = '';
//     let newStr = '';
    
//     for (let i = 0; i < str.length; i++) {
//         current += str[i]
//         if (str[i] === ' ') {
//             newStr = current + newStr;
//             current = '';
//         }
//     }

//     newStr = current + ' ' + newStr;
//     return newStr;
// }

// const reverseWords = (str) => {
//     return str.split(' ').reverse().join(' ');
// }

// console.log(reverseWords(str));

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Take a positive integer and turn it into an array of numbers in reverse order
// const num = 348597 // Should return [7,9,5,8,4,3]

// const digitize = (num) => {
//     num = num.toString();
//     const arr = [];

//     for (let i = num.length - 1; i >= 0; i--) {
//         arr.push(num[i])
//     }

//     return arr;
// }

// const digitize = (num) => {
//     return num.toString().split('').reverse();
// }

// console.log(digitize(num));


// Filter
// Takes an array and only keeps the values thast fulfill a specific requirement

// https://www.codewars.com/kata/54edbc7200b811e956000556
// You need to count the number of sheep that are in their position.  This is represented by an array of of booleans (true means a sheep is present, false means no).
// const sheep = [
//     true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true] // Should return 17

// const countSheep = (sheep) => {
//     let count = 0;

//     for (let i = 0; i < sheep.length; i++) {
//         if (sheep[i]) {
//             count++;
//         }
//     }

//     return count;
// }

// const countSheep = (sheep) => {
//     return sheep.filter(x => x === true).length;
// }

//console.log(countSheep(sheep));

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
// You are given an array of birds.  You need to filter out the geese (proveided in an array) and return the names of the other birds
// const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Should return ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// const gooseFilter = (birds) => {
//     for (let i = birds.length - 1; i >= 0; i--) {
//         if (geese.includes(birds[i])) {
//             birds.splice(i, 1);
//         }
//     }

//     return birds;
// }

// const gooseFilter = (birds) => {
//     return birds.filter(bird => !geese.includes(bird))
// }

// console.log(gooseFilter(birds));

// https://www.codewars.com/kata/55edaba99da3a9c84000003b
// You are given an array of numbers and then a number.  You must return an array of the numbers from the given array that are divisible by the number
// const arr = [1,2,3,4,5,6]

// const divisibleBy = (arr, num) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % num === 0) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

// const divisibleBy = (arr, num) => {
//     return arr.filter(n => n % num === 0);
// }

// console.log(divisibleBy(arr, 2));

// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// You are given an array and must return a new array with every other item removed
// const arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep"]
// Should return ["Keep", "Keep", "Keep", "Keep", "Keep", "Keep"];

// const removeEveryOther = (arr) => {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// const removeEveryOther = (arr) => {
//     return arr.filter((x, i) => i % 2 === 0);
// }

// console.log(removeEveryOther(arr));


// Slice
// Creates a portion of an array based on a starting index and an ending index

// https://www.codewars.com/kata/572b77262bedd351e9000076
// Given an array and a number return the first {number} items in the array
// const arr = ['a', 'b', 'c', 'd', 'e'];
// 3 should return ['a', 'b', 'c']
// 0 should return []

// const first = (arr, num) => {
//     const newArr = [];

//     for (let i = 0; i < num; i++) {
//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// const first = (arr, num) => {
//     return arr.slice(0, num);
// }

// console.log(first(arr, 3));
// console.log(first(arr, 0));


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


// Sort the animals alphabetically by first letter, 
//but if two animals start with the same letter they should appear in the original order
const animals = ['elephant', 'dog', 'antelope', 'deer', 'crocodile', 'aardvark', 'eagle', 'cat']
// should return ['antelope', 'aardvark', 'crocodile', 'cat', 'dog', 'deer', 'elephant', 'eagle']

const sorted = (arr) => {
    return arr.sort((a,b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        }
    })
}

console.log(sorted(animals));

// const mixed = ['pie', 5, 'cake', 2, 'pudding', 12, 'meringue', 22, 'mousse', 6, 'ice cream', 44];

// const sortMixed = (arr) => {
//     return arr.sort((a,b) => {
//         if (typeof a === 'string' && typeof b === 'number') {
//             return -1;
//         } else if (typeof a === 'string' && typeof b === 'string') {
//             if (a < b) {
//                 return -1;
//             } else {
//                 return 1;
//             }
//         } else {
//             return a - b;
//         }
//     });
// }

// console.log(sortMixed(mixed));

// const words = ['long', 'longer', 'longest', 'longlierest', 'short', 'shor', 'sho', 'sh'];

// const wordLengths = (arr) => {
//     return arr.sort((a,b) => {
//         if (a.length < b.length) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })
// }

// console.log(wordLengths(words));