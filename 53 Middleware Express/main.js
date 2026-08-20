const express = require('express');
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')

// app.use(express.static("public"))

//Middleware 1  Logger for an application

app.use('/blog', blog)

app.use((req, res, next) => {
    console.log(req.header)
    req.aryan = "I am Aryan"
    const timestamp = Date.now(); // Example: 1773934920000
    const readableDate = new Date(timestamp).toLocaleString();
    fs.appendFileSync("Logs.txt", `${readableDate} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

//Middleware 2
app.use((req, res, next) => {
    console.log("M2")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About ' + req.aryan)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})