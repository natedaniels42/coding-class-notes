// Sets

//const arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];

//Construct set from an arr
//const set = new Set(arr);


//console.log(set);

//Size tells you the number of items in a set
//console.log(`set has ${set.size} items in it right now`);

//Using the has method will allow us to check if an item is in the set
//console.log(`Set has the number five: ${set.has(5)}`);
//console.log(`Set has the number six: ${set.has(6)}`);

//Add an item to a set
//set.add(6);
//console.log(set);
// console.log(`Set now has ${set.size} items in it`);

//If an item already exists in the set, it will not be added
//set.add(5);
//console.log(set);
// console.log(`Set still has ${set.size} items in it`);

//ForEach- similar to array forEach minus the indexing
//set.forEach((val, i) => console.log(val, i));

//Entries will list the items in the set as a key value pair where the key is the same as the vlaue
//console.log(set.entries());

//Values lists the values of the set and can be iterated on using next()
//console.log(set.values());

// const setIter = set.values();
// console.log(setIter.next());
// while (!setIter.next().done) {
//     console.log(setIter);
// }

//delete will remove an item based on the value
//set.forEach(val => set.delete(val));
//console.log(set);

//clear will empty the entire set
// set.clear();
// console.log(set);

const arr1 = [2,7,6,3,1,6,10,8,3,2,4,5,3,2];
const arr2 = [6,7,3,4,2,5,9,4,2,7,9,4,2,0];

//console.log([...new Set([...arr1, ...arr2])].sort((a,b) => a - b));

//Spread Operator
const str = 'This is a string';
//console.log(...str);

//spread operator can be used for an unknown number of arguments
// const sum = (x,y,z) => {
//     return x + y + z;
// }
// console.log(sum(...[1,2,3,4]));

// Insert arrays into middle of a new array
// const arr3 = [4,5,6];
// const arr4 = [10,11,12];
// const numbers = [1,2,3,...arr3,7,8,9,...arr4];
//console.log(numbers);


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

// Sort the list of animals by the first letter of their name.  
// If 2 animals have the same first letter, they should appear in original order
const animals = ['elephant', 'camel', 'dog', 'deer', 'cat', 'antelope', 'eagle', 'aardvark'];
// should return ['antelope', 'aardvark', 'camel', 'cat', 'dog', 'deer', 'elephant', 'eagle'];

//sort in alphabetical order
//console.log(animals.sort());

//sort in reverse order
// console.log(animals.sort((a,b) => {
//     if (a < b) {
//         return 1;
//     } else {
//         return -1;
//     }
// }))

//Sort by first letter but then by order that it appears in original list
// console.log(animals.sort((a,b) => {
//     if (a[0] < b[0]) {
//         return -1;
//     } else if (a[0] > b[0]) {
//         return 1;
//     } else {
//         return 0;
//     }
// }))
/*
const arr10 = [1,4,5,6,12];
console.log(arr10.sort((a,b) => b - a));*/

const arr = ['2','m','6','r','3','a','7','t','12','e', '8'];
//const arr = [1,3,4,6,7,7,24,1,2]


const combo = (arr) => {
  arr.sort((a,b) => {
    if (/\d/.test(a) && /\D/.test(b)) {
      return 1;
    } else if (/\D/.test(a) && /\d/.test(b)) {
      return -1;
    } else {
      if (/\d/.test(a) && /\d/.test(b)) {
        return a - b;
      } else if (/\D/.test(a) && /\D/.test(b)) {
        if (a < b) {
          return -1;
        } else {
          return 1
        }
      }
    }
  });
  
  const result = [];
  let i = 0;
  
  while(/\D/.test(arr[i]) && /\d/.test(arr[arr.length - i - 1])) {
    result.push(`${arr[i]}${arr[arr.length - 1 - i]}`);
    i++;
  }
  
  return result;
}

console.log(combo(arr))
