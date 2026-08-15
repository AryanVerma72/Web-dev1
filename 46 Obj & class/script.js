// let obj = {
//     a :1,
//     b : "Aryan"
// }
// console.log(obj) 

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ = animal;

class Animal {
    constructor(name){
        this.name = name
        console.log("Object is created")
        
    }
    eats(){
        console.log("Eatinggggggg")
    }
    jumps(){
        console.log("Jumppingg")
    }


}

let a = new Animal("Cow");
console.log(a)
