console.log("This is Function Code")

function nice(name){
    console.log("hey " + name + " You are nice")
    console.log("hey " + name + " You are good")
    console.log("hey " + name + " You are bad")
    console.log("hey " + name + " You are tall")
}

function sum(a, b){
    // console.log(a+b);
    return a + b
}

r = sum(3,5)
console.log("The sum is " ,r)

// nice("Aryan")
// nice("Shivam")

const func1 = (x)=>{
    console.log("I am an arrow function : " , x)
}

func1(45);
func1(78);
func1(12);