// Validate Email
// Email must follow standard email format (XXXXXX@XXXX.XXX)
// The first character must be an alphabetic character (no number or special character)
// The @ can only appear once and must before the final part of the address with characters in between the @ and .
// The end of the address must be either '.com', '.edu', or 'nz'
// If valid return true, else return false

// Tests
// const email1 = 'john.doe@email.com'; // returns true
// const email2 = '@email.com'; // returns false
// const email3 = 'john.doe@email.gov'; // returns false (although this would be a valid email in normal cases it doesn't confrom to our rules)
// const email4 = '1john.doe@email.com'; // returns false
// const email5 = 'j@e.nz'; // returns true

// const validEmail = (email) => {
//     return /^[a-z]([\w!#$%\.]+)?@[\w!#$%]+\.(com|edu|nz)$/i.test(email);
// }

// console.log(validEmail(email1))
// console.log(validEmail(email2))
// console.log(validEmail(email3))
// console.log(validEmail(email4))
// console.log(validEmail(email5))


// Validate Phone Number
// Phone number will consist of a normal phone number with area (10 numbers total)
// There may be a 1 in front of those 10 numbers
// Phone number may be in multiple different formats and all of those formats should pass (see test examples)
// If groups of numbers are separated by space, parentheses, hyphen, etc, they should be grouped 3,3,4

// Tests
// const phone1 = '1234567890' // returns true
// const phone2 = '123-456-7890' // returns true
// const phone3 = '123 456 7890' // returns true
// const phone4 = '12 3456 7890' // returns false
// const phone5 = '(123)456-7890' // returns true
// const phone6 = '1 123 456 7890' // returns true

// const validPhone = (phone) => {
//     return /^\d?\s?\(?-?\d{3}\s?\)?-?\d{3}\s?-?\d{4}$/.test(phone);
// }

// console.log(validPhone(phone1));
// console.log(validPhone(phone2));
// console.log(validPhone(phone3));
// console.log(validPhone(phone4));
// console.log(validPhone(phone5));
// console.log(validPhone(phone6));


// Valid Password
// Password must be between 8 and 16 characters long
// Password must include a lowercase letter, an uppercase letter and a special character from this list (!@#$%^&)

// Tests 
// const password1 = 'Abcd1234!'; // returns true
// const password2 = 'abcd1234!'; // retruns false (No uppercase)
// const password3 = 'Abcd1234'; // returns false (No special character)
// const password4 = 'Abcd12!'; // return false (Too short)
// const password5 = 'Abcdefgh12345678!' // return false (Too long)
// const password6 = 'ABCD1234!'; // return false (No lowercase)

// const validPassword = (password) => {
//     return /^[\w!@#$%^&]{8,16}$/i.test(password) // tests that password is 8-16 characters and only contains the allowed characters 
//         && /[a-z]/.test(password) // tests that it includes at least one lowercase letter 
//         && /[A-Z]/.test(password) // tests that includes at least one uppercase letter
//         && /\d/.test(password) // test that it includes at least one number
//         && /[!@#$%^&]/.test(password); // tests that it includes at least one of the required special characters 
// }

// console.log(validPassword(password1));
// console.log(validPassword(password2));
// console.log(validPassword(password3));
// console.log(validPassword(password4));
// console.log(validPassword(password5));
// console.log(validPassword(password6));


// Regular Expression
// Allows us to easily match patterns in text in a way that would otherwise be complicated or produce lengthy code
// (Note: keep in mind that even if dealing with numbers when we are using regular expression we are referring to numbers in string form)
// There are several methods that can be used with regular expressions.  Right now we will focus on test
// It returns true if a string can match the given regex and false if it can't

//  When creating a regular expression you initialize and end the expression with /
// Example: /cat/ (Matches any text that includes the word cat 
// (cat, category, concat, scats))

// If we use the square brackets [] it will check that one character to see if it matches any of the characters in the bracket
// Example /[cmr]at/ (Matches if the string includes either c, m, or r followed immediately by at)
// (cat, mat, rat, drat)

// You can use parentheses () to separate chunks of text
// Example /(car|tor|mas)t/ the | is used to represent or.  This example will match any text that has car, tor, or mas followed immediately by t
// (cart, tort, mast)

// Curly brackets are used if you want to say that something repeats itself for a certain number of times
// You can give it an exact number ({5}), a minimum ({5,}), or or a max ({0,5})
// Example /cat{5}/ will only match if the text has cattttt (the 5 only affects the last character)
// Example /(cat){5}/ By grouping with the parentheses the result will match catcatcatcatcat
// Example /a{5,}/ must be at least 5 a's (aaaaa, aaaaaaaaa)

// When grouping characters in square brackets you can search by ranges 
// if you want numbers you could say /[0-9]/ which will match any single digit
// if you want just letters you can do /[a-z]/ (note: this is case sensitive so will only match lowercase)
// if you want all leters regardless of case /[a-zA-Z]/
// You can also choose only specific ranges /[r-u]/ will only match r,s,t,u
// Example credit card validator /([0-9]{4}){4}/ matches a 16 digit number that is grouped in 4s

// The ^ symbol has a couple uses.  If used inside the square brackets it means that you match anything other than the given characters
// Example /[^cmr]at/ Won't match for cat, mat, rat but will match for fat
// If used right at the beginning of your regex it means that this should only match the beginning of the text
// Example /^cat/ would match cat, category, cattle, but not scat or concat

// The $ symbol is used at the very end of the regex to mean that it should only match the end of the text
// Example /cat$/ would match cat and concat but not cattle or category
// Example /^cat$/ would only match cat as the test must match the beginning and the end

// Character Classes

// Character classes are a simplified way to represent that you are matching all the characters of a specific type
// When using these you must use the back slash \ before because if not it would just match with the letter used

// The \d class represents numeric values. It is the same as saying /[0-9]/
// Example /^\d{5}$/ would match any 5 digit number (without the ^ and $ it would match any string that had a 5 digit in any place in a string)
// (12345)
// Example /\d{5}/ would match anywhere in the string
// (cat12345cat, 1234567890)

// The \w class represents any alphabetic character, number, or underscore.
// (Note: when using this as opposed to [a-z] it is not case sensitive.  It will match lower and uppercase) 
// Example /\w{5}/ 
// (water, wat4r, wat_r, watering)

// The \s class represents any non character space in a string
// Example /\w\s\w/
// (c c, a a, 5 a)

// With all of these character classes you can also use the capital letter (\D, \W, \S)
// This means that the character can be anything other than that class
// /\D/ is the same as /[^0-9]/

// The back slash \ is also important for other situations
// If you want to match a string with a character that has a specific purpose in regex you have to use the \
// Example /the end\./ The . is a special character so to match it you use the \
// Example /\(car\)/ If you want to match the string (car) the parentheses must use \ because they are a special character

// The . is a wildcard.  It will match any character except line breaks (\n)
//example /.{5}/ matches abcde, 12345, ab de

// Let's say you want a certain character or group of characters but you don't know how many times it will happen
// The + means that the character (or group) happens at least once but any number beyond that
// Example /ca+t/ matches cat, caat, caaaaaaaaaat

// Let's say you may want a character, but you are not sure if you will or how many times
// The * means that a character will happen either zero times or any number of times
// Example /ca*t/ matches cat, caaat, caaaaaat, ct

// Let's say that may want a character or may not but if you do it only happens once
// The ? means the previous character (or group of characters) is optional
// Example /(hot)?dog/ matches dog, hotdog, puppydog

// You may also see letters following the closing of the regex.  Generally, g and/or i
// the g means that the regex is global, meaning it applies to the whole string 
// While the examples we have been using have already been applying the regex to the string globally
// The match method will return the specific matches of the regex in the string
// Example 'a4b2c5'.match(/[a-z]\d/) will only return the first match (a4)
// Example 'a4b2c5'.match(/[a-z]\d/g) will return all matches in the string ([a4, b2, c5])
// Regex can also be used in the string method replace
// Example 'benene'.replace(/e/, 'a') will only replace the first e giving you banene
// Example 'benene'.replace(/e/g, 'a') will replace all e's giving you 'banana'

// The i stands for inclusive, meaning it will apply to both lower and uppercase characters
// Example /[aeiou]/ will match e, i, u but not E, I, U
// Example /[aeiou]/i will match e, i, u and E, I, U

// Regular Expression Resources
// https://regexone.com/
// This is a website with simple lessons and practice activities to learn how match specific strings while not matching others

// https://www.hackerrank.com
// This is a website that has lots of code challenges covering various topics
// It specifically has a section to practice regex


// For Next Time:
// Given a specific year and a number representing the day of the year return 'Day {day} of {month name} in the year {year}'
// Remember these rules about leap years:
// if the year % 400 === 0 it is a leap year
// if the year % 100 === 0 it is not a leap year (unless it is also divisible by 400)
// if the year % 4 === 0 it is a leap year
// If the year is a leap year February will have 29 days, if not it will have 28
// Assume the year will always be AD

// Tests
// findDate(1979, 220) will return 'Day 8 of August in the year 1979'
// findDate(1980, 220) will return 'Day 7 of August in the year 1980'
// findDate(2000, 385) will return 'Day 19 of January in the year 2001'
// findDate(800, 72) will return 'Day 12 of March in the year 800'
// findDate(700, 72) will return 'Day 13 of March in the year 700'