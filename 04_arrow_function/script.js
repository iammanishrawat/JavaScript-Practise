// const sayHello = (a) => {
//     console.log('Hello World' +' '+ a);
// }

// const sayHello = a => console.log(`Hello World ${a}`); // we can pass it like this if we have only one line of code and with template literals

// sayHello(5)

// const introduction = {
//     name: "Manish Rawat",
//     age: 30,
//     role: "Frontend Developer",
//     experience : "5 Years",
//     show: function() {
//         const that = this //converting this into that to pass this as parent object
//         // console.log(this); // this will print whole object with key value pairs
//         setTimeout(function(){ // for this normal function we need to convert our this(window object into object by using const that = this because it weill not take this from its parent like in normal situation)
//             // console.log(`my name is ${introduction.name} and i am a ${introduction.role}`) // this will still print values in console
//             // console.log(`my name is ${this.name} and i am a ${this.role}`) // in this case it will not print values in console
//             console.log(`my name is ${that.name} and i am a ${that.role}`) // in this case it will print values in console
//             // console.log(this); // print window object in console
//         }, 3000)

//         // setTimeout(() => { // in this case (arrow function), it will print values in console because of lexical scope of this
//         //     console.log(`my name is ${this.name} and i am a ${this.role}`)
//         // }, 3000)

            // here is a question - if we declare a arrow function in our traditional function then does our traditional function scope treats like a child component of object
//     }
// }

// introduction.show()



// console.log(this);

// function chai() {
//     console.log(this); // it will print window object in browser and empty object in node env
// }

// const chai = function() {
//     console.log(this); // it will print window object in browser and empty object in node env
// }

// const chai = () => {
//     console.log(this); // it will print window object in browser and empty object in node env
// }


// function chai() {
//     let owner = "Manish"
//     console.log(this.owner); // it will print unidentified
// }

// const chai = function() {
//     let owner = "Manish"
//     console.log(this.owner); // it will print unidentified
// }

// const chai = () => {
//     let owner = "Manish"
//     console.log(this.owner); // it will print unidentified
// }

// chai()


// const sum = (num1, num2) => {
//     // return console.log(`${num1 + num2} is here`)
//     // return num1 + num2
// }

// console.log(sum(`Manish`));
// console.log(sum(5, 5));





// class Calc {
//     input1 = 2
//     input2 = 5

//     add() {
//         setTimeout(function() {
//             console.log(`inside add function`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 ====`, this.input1 + this.input2)
//         }, 2000)
        
//         setTimeout(() => {
//             console.log(`inside add arrow`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 ====`, this.input1 + this.input2)
//         }, 4000)    
//     }

//     diff = () => {
//         setTimeout(function() {
//             console.log(`inside diff function`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 ====`, this.input1 + this.input2)
//         }, 6000)
        
//         setTimeout(() => {
//             console.log(`inside diff arrow`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 ====`, this.input1 + this.input2)
//         }, 8000)        
        
//         // console.log(`inside diff`)
//         // console.log(`this.input1 ==`, this.input1)
//         // console.log(`this.input2 ==`, this.input2)

//         // return this.input1 + this.input2
//     }
// }

// const obj1 = new Calc()

// obj1.add()
// obj1.diff()


// const obj1 = {
//     input1: 2,
//     input2: 5,
//     add: function() {
//         setTimeout(function() {
//             console.log(`inside add function`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 =========`, this.input1 + this.input2)
//         }, 2000)

//         setTimeout(() => {
//             console.log(`inside add arrow`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 =========`, this.input1 + this.input2)
//         }, 4000)
//     },
//     diff: () => {
//         setTimeout(function() {
//             console.log(`inside diff function`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 =========`, this.input1 + this.input2)
//         }, 6000)

//         setTimeout(() => {
//             console.log(`inside diff arrow`)
//             console.log(`this.input1 ==`, this.input1)
//             console.log(`this.input2 ==`, this.input2)

//             console.log(`this.input1 + this.input2 =========`, this.input1 + this.input2)
//         }, 8000)
//     }
// }

// obj1.add()
// obj1.diff()