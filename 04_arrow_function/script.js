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
        setTimeout(function(){
            // console.log(`my name is ${introduction.name} and i am a ${introduction.role}`) // this will still print values in console
            // console.log(`my name is ${this.name} and i am a ${this.role}`) // in this case it will not print values in console
            console.log(this); // print window object in console
        }, 3000)
        // console.log(this);
    }
}

introduction.show()