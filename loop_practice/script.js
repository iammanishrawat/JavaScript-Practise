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