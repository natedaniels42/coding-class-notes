// Given a specific year and a number representing the day of the year return 'Day {day} of {month name} in the year {year}'
// Remember these rules about leap years:
// if the year % 400 === 0 it is a leap year
// if the year % 100 === 0 it is not a leap year (unless it is also divisible by 400)
// if the year % 4 === 0 it is a leap year
// If the year is a leap year February will have 29 days, if not it will have 28
// Assume the year will always be AD

// const findDate = (year, day) => {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const date = new Date(year, 0, day);
//     return `Day ${date.getDate()} of ${months[date.getMonth()]} in the year ${date.getFullYear()}`;
// }

// Day, month and year separated to variables to make the return statement easier to read
// const findDate = (year, day) => {
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const date = new Date(year, 0, day);
//     const dateDay = date.getDate();
//     const dateMonth = date.getMonth();
//     const dateYear = date.getFullYear();
//     return `Day ${dateDay} of ${months[dateMonth]} in the year ${dateYear}`;
// }

// Tests
// console.log(findDate(1979, 220)) //will return 'Day 8 of August in the year 1979'
// console.log(findDate(1980, 220)) //will return 'Day 7 of August in the year 1980'
// console.log(findDate(2000, 385)) //will return 'Day 19 of January in the year 2001'
// console.log(findDate(800, 72)) //will return 'Day 12 of March in the year 800'
// console.log(findDate(700, 72)) //will return 'Day 13 of March in the year 700'

// Date Methods
// New Date will create a new instance of a date object
// If no arguments are given the date will reflect the exact time instance that the Date was created

// const date = new Date();

// A date can also be specified using arguments (year, day, month, etc)

// const date = new Date(1980, 1, 14);
// console.log(date);
// console.log(`getDay gives you the day of the week zero indexed (Sunday is 0): ${date.getDay()}`);
// console.log(`getDate gives you the day of the month: ${date.getDate()}`);
// console.log(`getMonth gives you the index of the month zero indexed(January is 0): ${date.getMonth()}`);
// console.log(`getFullYear gives you the 4 digit year: ${date.getFullYear()}`);
// console.log(`toTimeString: ${date.toTimeString()}`) // 00:00:00 GMT-0600 (Central Standard Time)
// console.log(`toTimeString: ${date.toDateString()}`) // Thu Feb 14 1980
// console.log(`toTimeString: ${date.toLocaleTimeString()}`) // 12:00:00 AM
// console.log(`toTimeString: ${date.toLocaleDateString()}`) // 2/14/1980

// Substring vs Substr
// Both give a specific segment of the string it is attached to
// with both you define the index where the substring begins
// the difference is that substring specifies the index to stop at (non-inclusive)
// while substr defines the number of items to include in the substring

// Examples console.log('planets'.substring(2, 4)) // starts at index 2 and stops before index 4, prints 'an'
// console.log('planets'.substr(2, 4)) // starts at index 2 and prints 4 characters, prints 'anet'

// with both you can just declare the starting point and it will do a substring from that index to the end of the string

// Examples console.log('planets'.substring(2)) // prints 'anets'
// console.log('planets'.substr(2)) // prints 'anets'

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
// Take a string and return a string that removes the first and last characters

// Solution with substring
// const removed = (str) => {
//     return str.substring(1, str.length - 1);
// }

// Solution with substr
// const removed = (str) => {
//     const length = str.length - 2;

//     return str.substr(1, length);
// }

// console.log(removed('eloquent'))
// console.log(removed('country'))
// console.log(removed('person'))
// console.log(removed('place'))

// EndsWith
// checks if a string ends with a given character or group of character and returns true if it does

// Examples 'banana'.endsWith('na') // returns true
// 'banana'.endsWith('an') // returns false

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
// Given a string and a substring return true if the string ends with substring or false if it doesn't

// Solution with endsWith
// const ending = (str, end) => {
//     return str.endsWith(end);
// }

// Solution with regex
// const ending = (str, end) => {
//     const regex = new RegExp(`${end}$`);

//     return regex.test(str);
// }

// console.log(ending('abc', 'bc')) // returns true
// console.log(ending('abc', 'd')) // returns false

// Length and Reverse
// https://www.codewars.com/kata/54557d61126a00423b000a45
// Given 2 strings return the 2 strings (a,b) combined in the following manner
// (short string)(long string reversed)(short string)
// if both strings are the same length treat a as the long string

// const combined = (a,b) => {
//     let short = a.length < b.length ? a : b;
//     let long = short === a ? b : a;

//     return short + long.split('').reverse().join('') + short;
// }

// console.log(combined("first", "abcde")); // returns "abcdetsrifabcde"
// console.log(combined("hello", "bau")); // returns "bauollehbau"
// console.log(combined("abcde", "fghi")); // returns "fghiedcbafghi"

// Replace/Match/Filter/Test
// Replace allows you to choose a character or group of characters in a string and replace them with new text
// It will only replace the first instance of the character

// Example 'benene'.replace('e', 'a') becomes 'banene'

// We can also use regex to make it easier to replace multiple items

// Example 'benene'.replace(/e/g, 'a')

// The g after the regex stands for global and means it affects the entire string
// There is also a replaceAll method with will affect all instances of the given text 
// It may not allows work depending on the browser

// Example 'benene'.replaceAll('e', 'a')

// Match allows you to return all items in a string that match the specific criteria
// If the string contains the given qualifier then it returns it in an array
// Just like replace it will only affect the first instance
// If it is not in the string then match returns null

// Example 'criteria'.match('i') will return ['i']

// We can also use regex for this one

// Example to match all vowels 'criteria'.match(/[aeiou]/g) will return ['i', 'e', 'i', 'a']

// The regex matches all of the vowels by using the g (global) tag after the regex
// Like with replace match also has a matchAll method but it also may not be supported in all browsers

// Example 'criteria'.matchAll('i') will return ['i', 'i']

// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Return the count of the number of vowels in the given string
// It will only contain lowercase letters and spaces

// Solution using replace
// const vowels = (str) => {
//     return str.replace(/[^aeiou]/g, '').length;
// }

// Solution using match
// const vowels = (str) => {
//     return str.match(/[aeiou]/g).length;
// }

// Solution using filter
// const vowels = (str) => {
//     return str.split('').filter(x => x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u').length
// }

// Long solution
// const vowels = (str) => {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(vowels("abracadabra"))

// padStart/padEnd
// padStart and padEnd will add a given character or set of characters to a string until it reaches the desired length
// padStart adds to the beginning, padEnd adds to the end of the string
// Examples console.log('pad'.padStart(10, '$')) will print '$$$$$$$pad'
// console.log('pad'.padEnd(10, '$')) will print 'pad$$$$$$$'

// You are given a string (str), a character (char), and a final length (length) for your string
// Your goal is to pad both the beginning and the end until you reach length
// If the number to add is an odd number the extra padding will be on the front (i.e. if the padding is 7 4 will go on the left, 3 on the right)

// Solution with padStart and padEnd
// const padding = (str, char, length) => {
//     while (str.length < length) {
//         str = str.padStart(str.length + 1, char);

//         if (str.length < length) {
//             str = str.padEnd(str.length + 1, char);
//         }
//     }
//     return str;
// }

// Solution without padStart and padEnd
// const padding = (str, char, length) => {
//     while (str.length < length) {
//         str = char + str;
        
//         if (str.length < length) {
//             str = str + char;
//         }
//     }
//     return str;
// } 

// console.log(padding('word', '0', 20)); // will return '00000000word00000000'
// console.log(padding('piano', '%', 14)); // will return '%%%%%piano%%%%'
// console.log(padding('xylophone', ' ', 50)) // will return '                     xylophone                    '

// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c
// You are given an array of numbers (as strings). You must return a string where the characters are determined from those numbers
// the numbers correspond to letters in reverse order (z=1, y=2, ..., a=26) and !=27, ?=28, and ' '=29

// const numsToStr = (arr) => {
//     const alpha = [null,'z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' '];

//     return arr.map(x => alpha[x]).join('');
// }

// console.log(numsToStr(['24', '12', '23', '22', '4', '26', '9', '8'])) // returns 'codewars'
// console.log(numsToStr(['25','7','8','4','14','23','8','25','23','29','16','16','4'])) // returns 'btswmdsbd kkw'
// console.log(numsToStr(['4', '24'])) // returns 'wc'

// CharCodeAt
// Gives you the numeric code associated with the selected character
// Examples (a = 97, T = 84, - = 45)
// You can get the code by using charCodeAt()
// Example: console.log('a'.charCodeAt(0)) // returns 97
// Given a string replace all the letters with their position in the alphabet (a=1, b=2, c=3, etc)
// Ignore the case of the letter (a=A)
// Ignore all spaces and non alphabet characters
// return a string with each of the positions separated by a space
// https://www.codewars.com/kata/546f922b54af40e1e90001da

// const letterCodes = (text) => {
//     return text.toLowerCase().replace(/[^a-z]/gi, '').split('').map(x => x.charCodeAt(0) - 96).join(' ');
// }

// Steps split up to make the code easier to read
// const letterCodes = (text) => {
//     // Alpha is a string that contains all alphabetic characters to test against the text characters
//     const alpha = 'abcdefghijklmnopqrstuvwxyz';
//     
//     Text is converted to lower case so that all the letters will return the right values
//     text = text.toLowerCase();
//     //console.log(text);
//     
//     Split the text into an array of single characters
//     text = text.split('');
//     //console.log(text);
//     
//     Use filter to remove all non alphabetic items using our alpha string
//     text = text.filter(x => alpha.includes(x));
//     //console.log(text);
//     
//     Use map to convert each letter to the correct number (to get this we take the char code and subtract 96)
//     text = text.map(x => x.charCodeAt(0) - 96);
//     //console.log(text);
//     
//     Use join with a space ' ' to create our numbered string with spaces in between numbers
//     text = text.join(' ');
//     //console.log(text);
//     
//     Return the result
//     return text;
// }

// // Tests
// console.log(letterCodes('abcde')) // will return '1 2 3 4 5'
// console.log(letterCodes("The sunset sets at twelve o' clock.")) // will return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(letterCodes("The narwhal bacons at midnight.")) // will return "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

