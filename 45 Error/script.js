let a = prompt("Enter First number")
let b = prompt("Enter Second number")
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError ("This is not Allowed")
}
let sum = parseInt (a) + parseInt(b)

let x = 1
function main(){
try{
console.log("The sum is", sum * x)
return true

}
catch(error){
    console.log("Eroor aa gya")
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
    return false
}
finally{
    console.log("Finally is used for execute the code at any cost")
}

}

main()

