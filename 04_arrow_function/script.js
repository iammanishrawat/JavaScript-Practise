// const sayHello = (a) => {
//     console.log('Hello World' +' '+ a);
// }

// const sayHello = a => console.log(`Hello World ${a}`); // we can pass it like this if we have only one line of code and with template literals

// sayHello(5)

const introduction = {
    name: "Manish Rawat",
    age: 30,
    role: "Frontend Developer",
    experience : "5 Years",
    show: function() {
        const that = this //converting this into that to pass this as parent object
        // console.log(this); // this will print whole object with key value pairs
        // setTimeout(function(){ // for this normal function we need to convert our this(window object into object by using const that = this because it weill not take this from its parent like in normal situation)
        //     // console.log(`my name is ${introduction.name} and i am a ${introduction.role}`) // this will still print values in console
        //     // console.log(`my name is ${this.name} and i am a ${this.role}`) // in this case it will not print values in console
        //     console.log(`my name is ${that.name} and i am a ${that.role}`) // in this case it will print values in console
        //     // console.log(this); // print window object in console
        // }, 3000)

        setTimeout(() => { // in this case it will print values in console because of lexical scope of this
            console.log(`my name is ${this.name} and i am a ${this.role}`)
        }, 3000)
    }
}

introduction.show()