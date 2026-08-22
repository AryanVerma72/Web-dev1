import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {type : String, required : true, dafault: "Hey"},
    dec: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema)


