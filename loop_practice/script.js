// for loop example

// for (let i = 0; i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 50; i >= 0 ; i--) {
//     console.log(i);
// }

// let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arrayOne.length; i++) {
//   console.log(arrayOne[i]);
// }

// for (let i = arrayOne.length - 1; i >= 0; i--) {
//   console.log(arrayOne[i]);
// }

// let fruits = ["apple", "banana", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }


// while loop example

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }


// let i = 5;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 0
// while (i < arrayOne.length) {
//     console.log(arrayOne[i]);
//     i++
// }

// let i = arrayOne.length - 1
// while (i >= 0) {
//     console.log(arrayOne[i]);
//     i--
// }


// do while examples


// let i = 1;

// do {
//     console.log(i);
//     i++
// } while (i <= 5)

// let i = 5;
// do {
//     console.log(i);
//     i--
// } while (i > 0)

// let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = 0;
// do {
//     console.log(arrayOne[i]);
//     i++
// } while (i < arrayOne.length)

// let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = arrayOne.length - 1
// do {
//     console.log(arrayOne[i]);
//     i--
// } while (i >= 0)



// debugging

// let i = 5;

// while (i < 5) {
//   console.log(i);  // This will never execute because the condition is false.
//   i++;
// }


// let i = 5;

// do {
//   console.log(i);  // This will execute once, even though the condition is false.
//   i++;
// } while (i < 5);



// array manipulation without using methods

let fruits = ["apple", "banana", "orange"]
// i need to add mango at the last element in the existing array here (push)
// fruits[fruits.length] = "mango"


// i need to remove last element in the existing array here and change exiting array without last element (pop)
// let lastFruit = fruits[fruits.length - 1]
// fruits.length = fruits.length - 1
// console.log(lastFruit);
// console.log(fruits);


// i need to add mango at the first element in the existing array here (unshift)
// for (let i = fruits.length; i > 0; i--) {
//     fruits[i] = fruits[i - 1]
// }
// fruits[0] = "mango";
// console.log(fruits);

// i need to remove first element in the existing array here and change exiting array without first element (shift)
// let firstFruit = fruits[0]
// for (let i = 0; i < fruits.length - 1; i++) {
//     fruits[i] = fruits[i + 1]
// }
// fruits.length = fruits.length - 1
// console.log(firstFruit);
// console.log(fruits);