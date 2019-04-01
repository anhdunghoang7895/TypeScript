/**
* Array
*/

// declare an array

const list: number[] = [1, 2, 3];

const categories: Array<string> =
['Sport', 'IT', 'Car'];

console.log('list');
list.forEach((num) =>
console.log(num.toFixed(2))
);

console.log('categries');
categories.forEach((str) =>
console.log(str.includes('a'))
);

const listSquare = list.map(num => num * num);
console.log(listSquare)
// Output: [1, 4, 9]

// lọc các phần tử thỏa mãn
const result = categories.filter(str => str.length > 2)
console.log(result);
// Output: ['Sport', 'Car']


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.

