// print 0  to 100

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

for (let i = 1; i <= 10; i++) {
    if (i % 1 == 0 && i % i == 0) {
        // console.log(i);
    }
    for(let j = 2; j <= j - i; j++){
        if (j % i !==0) {
            console.log(i);
        }
    }
}
