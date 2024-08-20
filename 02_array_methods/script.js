// const myArray = [10, 20, 30, 40, 50]

// for (let i=0; i<myArray.length - 1; i++){
//     console.log(myArray[i]);
// }

/* --------------methods of arrays-------------- */

// const myArray = [1, 2, 3, 4, 5, 6, 7]

// const myNewArray = myArray.toString()
// console.log(myArray); // object
// console.log(myNewArray); //string

// const myNewArray = myArray.join("")
// console.log(myArray); // object
// console.log(myNewArray); //string

// delete myArray[1]
// console.log(myArray);  //delete is a operator

// const myArray = ['Manish', 'Apple', 'Singh']
// const myArray = [101, 999, 300, 400, 501, 600, 407]

// myArray.sort() // need to know about compare function for sort method
// console.log(myArray);


// const myArray = [10, 20, 30, 40, 50, 80, 90]

// const myNewArray = myArray.push(100, 200, 300) // can also do as a new variable declaration
// myArray.push(1000, 2000, 3000) //  this method adds elements from last in an existing array

// myArray.pop() //  this method remove last element in an existing array

// myArray.unshift(0, 5) //  this method adds elements from its starting in an existing array and pushes its existing elements

// myArray.shift() //  this method removes first elements in an existing array

// console.log(myArray.includes(90));
// console.log(myArray.indexOf(91)); // it throws -1 whenever it cannot find any defined value in array

// const myNewArray = myArray.join() // it change the array elements in a string with comma separator

// const myNewArray = myArray.slice(1,5)

// console.log(myNewArray);

// console.log(`1`, myArray); // does not manipulate existing array but create a new array

// const myNewArray2 = myArray.splice(1,5)

// console.log(myNewArray2);

// console.log(`2`, myArray); //does manipulate existing array and also create a new array



// const fruits = ["Apple", "Banana", "Mango"]

// const vegetables = ["Potato", "Tomato", "Onion"]

// const mixConcatArray = fruits.concat(vegetables) // combine two array in a new array

// const mixSpreadArray = [...fruits, ...vegetables] // combine two or more array in a new array

// console.log(mixSpreadArray);


// const bumpArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10], 11], 12, 13]

// const flatArray = bumpArray.flat(Infinity) //flat the array in a new array
// console.log(flatArray);



// console.log(Array.from("manish")); // convert string and html collections into an new array

// console.log(Array.from({name: "Manish"})); // in this scenario (object) cannot convert into array

// let scoreOne = 100
// let scoreTwo = 200
// let scoreThree = 300

// console.log(Array.of(scoreOne, scoreTwo, scoreThree)); //convert all the variables in elements of a new array