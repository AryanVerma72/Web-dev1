import mongoose from "mongoose"
import Express from "express"
import {Todo} from "./models/Todo.js"

let a = await mongoose.connect("mongodb://localhost:27017/todo")


// const express = require('express');
const app = Express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({
        Title: "This is first todo", dec: "Description", isDone: false
        
    })
    todo.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
