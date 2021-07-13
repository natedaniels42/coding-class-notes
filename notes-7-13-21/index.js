// Recursion

// Recursion is where a solution is found by calling itself within the function body using changing arguments


// Palindrome
// Determine whether a word is a palindrome (spelled the same both forwards and backwards)
// Return true if it is, no if not
// Treat it as case sensitive (radar is a palindrome, Radar is not)


// Normal Solution
// const palindrome = (str) => {
//     return str === str.split('').reverse().join('');
// }

// Longer Solution (Solve without reverse)
// const palindrome = (str) => {
//     for (let i = 0; i <= Math.floor(str.length / 2); i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true; 
// }

// Recursion Solution (Solve without a loop)
// const palindrome = (str) => {
//     // Check there are enough letters to compare, if not, it has to be a palindrome
//     if (str.length < 2) {
//         return true;
//     }

//     // Check first and last characters.  If they don't match, it isn't a palindrome
//     if (str[0] !== str[str.length - 1]) {
//         return false
//     }

//     // If neither is true then we continue to our next recursion with first and last letters removed
//     return palindrome(str.substring(1, str.length - 1));

// }

// console.log(palindrome('radar')); // returns true
// console.log(palindrome('Radar')); // returns false
// console.log(palindrome('rattatattar')); // returns true
// console.log(palindrome('radarradarradar')); // returns true


// Factorial
// Given a number find the factorial of that number
// A factorial is defined as the all numbers from 1 to the number multiplied together 
// Example the factorial of 5 is 1 * 2 * 3 * 4 * 5 = 120
// Number will be a positive integer

// Normal Solution
// const factorial = (num) => {
//     let total = 1;

//     for (let i = 1; i <= num; i++) {
//         total *= i;
//     }

//     return total;
// }

// Recursive Solution 
// const factorial = (num) => {
//     if (num < 1) {
//         return 1;
//     }

//     return num * factorial(num - 1);
// }

// console.log(factorial(5)); // returns 120
// console.log(factorial(1)); // returns 1
// console.log(factorial(7)); // returns 5040
// console.log(factorial(3)); // returns 6


// Fibonacci 
// Given a number n find the nth number in the fibonacci sequence
// A fibonacci number is defined as the sum of the 2 previous fibonacci numbers prior to it
// The first 5 fibonacci numbers are 1, 1, 2, 3, 5;
// the number is guaranteed to be a positive integer

// Normal Solution
// const fib = (num) => {
//     if (num < 2) {
//         return 1;
//     }

//     const arr = [1,1];

//     while (arr.length < num) {
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     }

//     return arr[arr.length - 1];
// }

// Solution without array
// const fib = (num) => {
//     if (num < 2) {
//         return 1;
//     }
    
//     let count = 2;
//     let current = 1;
//     let previous = 1;

//     while (count < num) {
//         let temp = current;
//         current = current + previous;
//         previous = temp;
//         count++;
//     }

//     return current;
// }

// Recursive solution
// const fib = (num) => {
//     if (num < 3) {
//         return 1;
//     }

//     return fib(num - 1) + fib(num - 2);
// }

// Recursive Solution with memoization
// const fib = (num, memo = {}) => {
//     if (num < 3) {
//         return 1;
//     }

//     if (memo[num]) {
//         return memo[num];
//     }

//     return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
// }

// console.log(fib(4)); // returns 3
// console.log(fib(1)); // returns 1
// console.log(fib(7)); // returns 13
// console.log(fib(25)); // returns 75025


// Find the sum of an array of integers

// Normal solution with loop
// const sum = (arr) => {
//     let total = 0;

//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }

//     return total;
// }

// Solution with reduce
// const sum = (arr) => {
//     return arr.reduce((a,c) => a + c);
// }

// Solution with recursion
// const sum = (arr, total = 0) => {
//     if (!arr.length) {
//         return total;
//     }

//     total += arr.pop();

//     return sum(arr, total);
// }

// console.log(sum([1,2,3,4,5])); // returns 15
// console.log(sum([1])); // returns 1
// console.log(sum([1,2,3,4,5,6,7])); // returns 28


// Find the greatest common denominator of 2 numbers

// Long solution
// const denominators = (num1, num2) => {
//     let min = Math.min(num1, num2);

//     for (let i = min; i >= 1; i--) {
//         if (num1 % i === 0 && num2 % i === 0) {
//             return i
//         }
//     }
// }

// Recursion
// const denominators = (num1, num2) => {
//     if (!num2) {
//         return num1;
//     }

//     return denominators(num2, num1 % num2);
// }

// Same without recursion
// const denominators = (num1, num2) => {
//     while (num2) {
//         const temp = num1;
//         num1 = num2;
//         num2 = temp % num2;
//         console.log([num1, num2]);
//     }
//     return num1;
// }

// console.log(denominators(2154, 458)); // returns 2
// console.log(denominators(2, 7)); // returns 1
// console.log(denominators(35, 80)); // returns 5


// Some uses of recursion with data structures

// Find the node in a linked list by the data
// Basic Node Class
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null
//     }
// }

// // Basic LinkedList class
// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // With recursion
//     getNodeByDataRecursively(data, node = this.head) {
//         // will return null if there is no head or if it gets to the end of the list and doesn't find the data
//         if (node === null) {
//             return null;
//         }
        
//         // will return node if data matches node data
//         if (node.data === data) {
//             return node;
//         }

//         // recurses the method using the next node in rhe list
//         return this.getNodeByDataRecursively(data, node.next);
//     }

//     // Without recursion
//     getNodeByData(data) {
//         // current keeps track of the node we are on
//         let current = this.head;

//         // if the head is empty the return is null
//         if (!current) {
//             return null;
//         }

//         // Loops through the list nodes until it finds the correct node or end of the list
//         while (current) {
//             if (current.data === data) {
//                 return current;
//             }
//             current = current.next;
//         }

//         // if the loop is completed without a return value that means the data is not in the list
//         return null;
//     }
// }

// const list = new LinkedList();
// list.head = new Node(1);
// list.head.next = new Node(2);
// list.head.next.next = new Node(3);
// list.head.next.next.next = new Node(4);

// // console.log(list.getNodeByDataRecursively(3));
// // console.log(list.getNodeByDataRecursively(4));
// // console.log(list.getNodeByDataRecursively(5));
// console.log(list.getNodeByData(3));
// console.log(list.getNodeByData(4));
// console.log(list.getNodeByData(5));


// Binary Trees utilize recursion a lot to travel through the tree
// A couple good examples of this is insertion into the tree and depth first traversal

// Basic BinaryTree
// class BinaryTree {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }

//     insert(value) {
//         if (value < this.value) {
//             if (this.left) {
//                 this.left.insert(value);
//             } else {
//                 this.left = new BinaryTree(value);
//             }
//         } else {
//             if (this.right) {
//                 this.right.insert(value);
//             } else {
//                 this.right = new BinaryTree(value);
//             }
//         }
//     }

//     depthFirstTraversal() {
//         if (this.left) {
//             this.left.depthFirstTraversal();
//         }
//         console.log(this.value);
//         if (this.right) {
//             this.right.depthFirstTraversal();
//         }
//     }
// }

// const bt = new BinaryTree(50);

// for (let i = 0; i <= 100; i += 20) {
//     bt.insert(i);
// }

// bt.depthFirstTraversal();