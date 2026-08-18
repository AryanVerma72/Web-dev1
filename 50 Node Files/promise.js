import fs from "fs/promises"

let a = await fs.readFile("Aryan.txt")

let b = await fs.appendFile("Aryan.txt", "\n\n\n\nI'm Learning Web Dev")

console.log(a.toString(),b)