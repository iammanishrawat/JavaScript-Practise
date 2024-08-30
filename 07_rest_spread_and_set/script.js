// rest and spread examples

// const obj = {
//     id: 1,
//     userName: "manish",
//     email: "manish@gmail.com"
// }

// const {id, userName,  ...restObjectKeys} = obj
// console.log(`id =================`, id)
// console.log(`userName =================`, userName)
// console.log(`rest =================`, restObjectKeys)
// // console.log(`rest =================`, ...restObjectKeys)


// function add(...allInput) {
//     console.log(allInput)
//     console.log(...allInput)
// }

// add(1,2,3,4,5,6,7,8)


// rest and spread examples


















// spread example in array

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// let arr3 = []
// arr3 = arr1
// arr3 = [...arr1, ...arr2]

// spread example in array

// spread example in object

// let obj1 = {
//     id1: 1,
//     id2: 2
// }
// let obj2 = {
//     id3: 3,
//     id4: 4
// }
// let obj3 = {
//     ...obj1,
//     ...obj2
// }
// console.log(obj3)

// spread example in object


// rest example in function

// function add(input1, input2, ...allInput) {
//     // console.log(input1, input2, input3, input4, input5)
//     console.log(allInput)
// }

// add(1, 2, 3, 4, 5, 6, 7)

// rest example in function


// rest example in object

// let obj1 = {
//     id: 1,
//     name: 'Manish',
//     email: "m@gmail.com",
//     add: () => {},
//     obj2: {}
// }

// let {id, ...otherKeys} = obj1
// console.log(`id ==`, id)
// console.log(`otherKeys ==`, otherKeys)


// rest example in object



// set example in javascript

// const mySet = new Set();


// mySet.add(0);
// mySet.add(1);
// mySet.add(2);
// mySet.add(10);
// mySet.add(500);
// mySet.delete(0); // it will delete 0 fom the set (object)
// console.log(mySet);

// console.log(mySet.size); // it will print the lenght of the set (object)
// console.log(mySet.has(1)); // it will check value which we pass in has(), if that find valsue , then it will print true / false accordingly

// console.log('total number of set is' +" "+ mySet.size +' '+ 'and do we have number 2 in the set:' +' '+ mySet.has(2));

// set example in javascript