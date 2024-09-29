// print 0 to 100

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i <= 100){
//     console.log(i);
//     i++
// }

// let i = 0;
// do {
//     console.log(i);
//     i++
// }
// while (i <= 100)




// print sum of the numbers between 1 to 10

// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum = sum + i
// }
// console.log(sum);

// let sum = 0;
// let i = 0;
// while (i <= 10) {
//     sum = sum + i
//     i++
// }
// console.log(sum);

// let sum = 0;
// let i = 0

// do {
//     sum = sum + i
//     i++    
// } while (i <= 10)
// console.log(sum);




// print even numbers

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }    
// }

// let i = 1
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++
// }

// let i = 1
// do {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//     i++
// } while (i <= 10);


// print odd numbers

// for (let i = 1; i <= 10; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// let i = 1
// while (i <= 10) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i++
// }

// let i = 1
// do {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++
// } while (i <= 10)




// print prime number

// let primeNumber = []
// for (let i = 2; i <= 100; i++) {
//     let isDivisible = false;
//     for (let j = 2; j <= i - 1; j++) {
//         if (i % j == 0) {
//             isDivisible = true
//             break
//         }
//     }
//     if (!isDivisible) {
//         primeNumber.push(i)
//     }
// }

// console.log(primeNumber);

//  one more example
// let primeNumberArray = []
// for (i = 2; i <= 100; i++) {
//     isDivisible = false
//     for (j = 2; j < i; j++) {
//         if (i % j == 0) {
//             isDivisible = true
//             break
//         }
//     }

//     if (!isDivisible) {
//         primeNumberArray.push(i)
//     }
// }

// console.log(primeNumberArray)


// let primeNumber = []
// let i = 2;
// while (i <= 100) {
//     let j = 2
//     let isDivisible = false
//     while (j <= i - 1) {
//         if (i % j == 0) {
//             isDivisible = true
//             break
//         }
//         j++
//     }
//     if (!isDivisible) {
//         primeNumber.push(i)
//     }
//     i++
// }

// console.log(primeNumber);

// let primeNumber = []
// let i = 2
// do {
//     let j = 2
//     let isDivisible = false
//     do {
//         if (i % j == 0) {
//             isDivisible = true;
//             break
//         }
//         j++
//     } while (j <= i - 1);
//     if (!isDivisible) {
//         primeNumber.push(i)
//     }
//     i++
// } while (i <= 100)

// console.log(primeNumber)


// print factorial of the numbers between 1 to 10

// factors = 1
// for (let i = 1; i <= 5; i++) {
//     factors = factors * i
// }

// console.log(factors);

// factors = 1
// let i = 1
// while (i <= 5) {
//     factors = factors * i
//     i++
// }
// console.log(factors)


// factors = 1
// let i = 1
// do {
//     factors = factors * i
//     i++
// } while (i <= 5);

// console.log(factors);



// print a string in reverse

// let stringName = ["M", "A", "N", "I", "S", "H"]
// let newName = []
// for (let i = stringName.length - 1; i >= 0; i--) {
//     newName.push(stringName[i])
// }
// console.log(newName.join(" "));



//  print the multiples of 7    

// for (let i = 1; i <= 10; i++) {
//     console.log(i * 7);
// }






// print count of vowels in a string
// let userName = "Manish Rawat"
// let vowels = "aeiou".toLocaleLowerCase()
// let vowelCounts = 0
// // now we need to find vowel letters as well
// let vowelLetters = []
// for (let i = 0; i < userName.length; i++) {
//     if (vowels.includes(userName[i])) {
//         vowelCounts++
//         vowelLetters.push(userName[i])
//     }
// }

// console.log(`total vowel counts are ${vowelCounts}`);

// console.log(`letters which are vowel in username are ${vowelLetters}`);





// Print elements of an array  - and also find the largest number in the array

// let array = [1000, 200, 10, 22, 35, 55, 87, 100, 101, 250, 5000]
// let largestNumber = array[0]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largestNumber) {
//         largestNumber = array[i]
//     }
// }

// console.log(`largest number is in array is ${largestNumber}`);





// print sum of even numbers

// let sum = 0
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i       
//     }
// }

// console.log(sum);





// print the sum of odd numbers
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum = sum + i
//     }
// }

// console.log(sum);



// print the array in reverse
// array = [10, 20, 30, 40, 50, 60, 70]
// reverseArray = []
// for (let i = array.length - 1; i > 0; i--) {
//     reverseArray.push(array[i])
// }

// console.log(reverseArray);




// find the smallest number in the array

// let = array = [10, 20, 30, 40, 50, 5]
// let smallestNumber = array[0]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < smallestNumber) {
//         smallestNumber = array[i]
//     }
// }

// console.log(smallestNumber);




// print duplicate values in an array - not completed
// let array = [10, 20, 30, 40, 50, 60, 70, 30, 40, 50]
// let repeatedValueArray = []

// for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(i) <= 1) {
//         repeatedValueArray.push(array[i])
//     }
// }

// console.log(repeatedValueArray);




// print fibonacci numbers in an array

// let a = 0
// let b = 1
// let fibArray = []
// fibArray.push(b)
// let nextNum = a + b
// fibArray.push(nextNum)

// for (let i = 0; i <= 8; i++) {
//     a = b
//     b = nextNum
//     nextNum = a + b
//     fibArray.push(nextNum)
// }

// console.log(fibArray);





// print Tribonacci numbers in an array

// let a = 0
// let b = 1
// let c = 1
// let nextNum = a + b + c
// console.log(b);
// console.log(c);
// console.log(nextNum);

// for (i = 0; i <= 10; i++) {
//     a = b
//     b = c
//     c = nextNum
//     nextNum = a + b + c
//     console.log(nextNum);

// }




// print repeated numbers in an array

// let arrayOne = [1, 2, 3, 4, 5, 6, 1, 5, 6, 2]

// let arrayTwo = []
// let arrayThree = []

// for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayTwo.includes(arrayOne[i])) {
//         arrayThree.push(arrayOne[i])
//     } else {
//         arrayTwo.push(arrayOne[i])
//     }
// }
// console.log(arrayTwo);
// console.log(arrayThree);





// let arrayOne = [1, 2, 3, 4, 5, 6, 1, 5, 16, 2]

// let BiggestNum = arrayOne[0]

// for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] > BiggestNum) {
//         BiggestNum = arrayOne[i]
//     }
// }

// console.log(BiggestNum);












// ======================================================================================



// let primeNumberArray = []
// for (let i = 1; i <= 100; i++) {
//     let isDivisible = false;
//     for (j = 2; j <= i - 1; j++) {
//         if (i % j == 0) {
//             isDivisible = true
//             break
//         }
//     }
//     if(!isDivisible) {
//         primeNumberArray.push(i)
//     }

// }

// console.log(primeNumberArray);





// let gameNumber = 7

// let personNumber = prompt("Please guess a number", )

// while (gameNumber != personNumber) {
//     personNumber = prompt("You have guessed wrong, please try again", )
// }

// console.log(`Congrats, your right number is ${personNumber}`);



// let str = "301624"
// for (const val of str) {
//     console.log(val);
// }   

// let str = "301624"
// let = sum = 0
// for (let i = 0; i < str.length; i++) {
//     sum = sum + parseInt(str[i])
// }

// console.log(sum);


// let str = "Manish"

// console.log(str.length);


// let str1 = 'Manish'
// let srt2 = 'Rawat'

// let result = str1.concat(srt2)
// let result = "My name is" + " "+ str1 + " " + srt2
// let result = `My name is ${str1} ${srt2}`

// console.log(result);


// let fullName = prompt(`Enter your full name here`)

// let fullNameLength = fullName.length

// let userName = `@${fullName.toLocaleLowerCase()}${fullNameLength}`

// console.log(userName);