console.log("Working With  files")
const fs = require("fs")
console.log(fs)


// fs.writeFileSync("Aryan.txt", "My number is 923849817")
console.log("Starting")

fs.writeFile("Aryan 2.txt", "My age is 21",()=>{
    console.log("Done")
    fs.readFile("Aryan 2.txt", (error, data)=>{
        console.log(error,data.toString())
    })
})

fs.appendFile("Aryan.txt" , "AryanMagic", (e,d)=>{
    console.log(d)
})

console.log("Ending")
